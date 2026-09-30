import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCrud } from "../../../../hooks/useCrud";
import styles from "../form.module.css";

const CATEGORIES = [
    { value: "starter", label: "Forretter" },
    { value: "main", label: "Hovedretter" },
    { value: "dessert", label: "Desserter" },
];

const emptyValues = {
    title: "",
    description: "",
    category: "",
    price: "",
    isSignature: false,
    image: null,
};

const buildSchema = (isEditing) =>
    yup.object({
        title: yup
            .string()
            .trim()
            .required("Navn er påkrævet"),

        description: yup
            .string()
            .trim()
            .min(5, "Beskrivelsen skal være mindst 5 tegn")
            .required("Beskrivelse er påkrævet"),

        category: yup
            .string()
            .trim()
            .required("Kategori er påkrævet"),

        price: yup
            .number()
            .transform((value, originalValue) => {
                if (
                    originalValue === "" ||
                    originalValue === null ||
                    originalValue === undefined
                ) {
                    return undefined;
                }

                return value;
            })
            .typeError("Pris skal være et tal")
            .required("Pris er påkrævet")
            .min(0, "Prisen må ikke være negativ"),

        isSignature: yup
            .boolean()
            .default(false),

        image: yup
            .mixed()
            .test(
                "image-required",
                "Billede er påkrævet",
                (value) => {
                    if (isEditing) {
                        return true;
                    }

                    return value?.length > 0;
                }
            ),
    });

const DishForm = ({ dish, onClose }) => {
    const { create, update } = useCrud();

    const isEditing = Boolean(dish);

    const schema = useMemo(
        () => buildSchema(isEditing),
        [isEditing]
    );

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: emptyValues,
    });

    useEffect(() => {
        if (!dish) {
            reset(emptyValues);
            return;
        }

        reset({
            title: dish.title ?? "",
            description: dish.description ?? "",
            category: dish.category ?? "",
            price: dish.price ?? "",
            isSignature: Boolean(dish.isSignature),
            image: null,
        });
    }, [dish, reset]);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            // Rens tekstfelter
            const title = data.title?.trim() ?? "";
            const description =
                data.description?.trim() ?? "";
            const category =
                data.category?.trim() ?? "";

            // Konverter pris til et rigtigt number
            const price = Number(data.price);

            // Ekstra frontend-sikkerhed
            if (!title) {
                setError("title", {
                    type: "manual",
                    message: "Navn er påkrævet",
                });
                return;
            }

            if (!description) {
                setError("description", {
                    type: "manual",
                    message: "Beskrivelse er påkrævet",
                });
                return;
            }

            if (!category) {
                setError("category", {
                    type: "manual",
                    message: "Kategori er påkrævet",
                });
                return;
            }

            if (!Number.isFinite(price) || price < 0) {
                setError("price", {
                    type: "manual",
                    message: "Indtast en gyldig pris",
                });
                return;
            }

            // Tekstfelter
            formData.append("title", title);
            formData.append(
                "description",
                description
            );
            formData.append("category", category);

            // FormData sender værdier som tekst.
            // Backend skal derfor konvertere denne til number.
            formData.append("price", String(price));

            // Boolean sendes som "true"/"false".
            // Backend skal konvertere dette til boolean.
            formData.append(
                "isSignature",
                data.isSignature ? "true" : "false"
            );

            // Billede
            const imageFile = data.image?.[0];

            if (imageFile instanceof File) {
                formData.append("image", imageFile);
            }

            // ID ved redigering
            if (isEditing) {
                if (!dish?._id) {
                    throw new Error(
                        "Retten mangler et ID og kan derfor ikke redigeres."
                    );
                }

                formData.append("id", String(dish._id));
            }

            // DEBUG - kan fjernes senere
            console.log(
                isEditing
                    ? "Opdaterer ret:"
                    : "Opretter ret:"
            );

            for (const [key, value] of formData.entries()) {
                console.log(
                    key,
                    value instanceof File
                        ? {
                              name: value.name,
                              type: value.type,
                              size: value.size,
                          }
                        : value
                );
            }

            // CREATE / UPDATE
            if (isEditing) {
                await update("dish", formData);
            } else {
                await create("dish", formData);
            }

            // Luk kun formularen hvis request lykkedes
            onClose();
        } catch (error) {
            console.error(
                isEditing
                    ? "Kunne ikke redigere retten:"
                    : "Kunne ikke oprette retten:",
                error
            );

            // Vis backend-fejlen i formularen
            setError("root", {
                type: "server",
                message:
                    error?.message ||
                    "Der opstod en fejl. Prøv igen.",
            });
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>
                <h2>
                    {isEditing
                        ? "Rediger ret"
                        : "Opret ret"}
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    {errors.root && (
                        <p className={styles.error}>
                            {errors.root.message}
                        </p>
                    )}

                    <div className={styles.formGroup}>
                        <label htmlFor="title">
                            Navn
                        </label>

                        <input
                            id="title"
                            type="text"
                            autoComplete="off"
                            {...register("title")}
                        />

                        {errors.title && (
                            <p className={styles.error}>
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">
                            Beskrivelse
                        </label>

                        <textarea
                            id="description"
                            placeholder="Fx Let røget laks serveret med rygeost..."
                            {...register("description")}
                        />

                        {errors.description && (
                            <p className={styles.error}>
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="category">
                            Kategori
                        </label>

                        <select
                            id="category"
                            {...register("category")}
                        >
                            <option value="">
                                Vælg kategori
                            </option>

                            {CATEGORIES.map((category) => (
                                <option
                                    key={category.value}
                                    value={category.value}
                                >
                                    {category.label}
                                </option>
                            ))}

                            {isEditing &&
                                dish?.category &&
                                !CATEGORIES.some(
                                    (category) =>
                                        category.value ===
                                        dish.category
                                ) && (
                                    <option
                                        value={dish.category}
                                    >
                                        {dish.category}
                                    </option>
                                )}
                        </select>

                        {errors.category && (
                            <p className={styles.error}>
                                {errors.category.message}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="price">
                            Pris
                        </label>

                        <input
                            id="price"
                            type="number"
                            min="0"
                            step="0.01"
                            inputMode="decimal"
                            placeholder="Fx 149"
                            {...register("price")}
                        />

                        {errors.price && (
                            <p className={styles.error}>
                                {errors.price.message}
                            </p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="isSignature">
                            Signaturret
                        </label>

                        <input
                            id="isSignature"
                            type="checkbox"
                            {...register("isSignature")}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="image">
                            Billede
                            {isEditing &&
                                " (lad være tom hvis billedet ikke skal ændres)"}
                        </label>

                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            {...register("image")}
                        />

                        {errors.image && (
                            <p className={styles.error}>
                                {errors.image.message}
                            </p>
                        )}

                        {isEditing && dish?.image && (
                            <div>
                                <p>
                                    Nuværende billede:
                                </p>

                                <img
                                    src={dish.image}
                                    alt={dish.title}
                                    width="120"
                                />
                            </div>
                        )}
                    </div>

                    <div className={styles.buttons}>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Gemmer..."
                                : isEditing
                                ? "Gem ændringer"
                                : "Opret ret"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Annuller
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DishForm;
