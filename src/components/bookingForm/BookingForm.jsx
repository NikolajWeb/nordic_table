import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./BookingForm.module.css";

import { useCrud } from "../../hooks/useCrud";

const schema = yup.object({
    name: yup
        .string()
        .required("Fulde navn er påkrævet"),

    email: yup
        .string()
        .email("Indtast en gyldig email")
        .required("Email er påkrævet"),

    date: yup
        .string()
        .required("Dato er påkrævet"),

    time: yup
        .string()
        .required("Tidspunkt er påkrævet"),

    numberOfGuests: yup
        .number()
        .typeError("Antal gæster skal være et tal")
        .integer("Antal gæster skal være et helt tal")
        .min(1, "Der skal være mindst 1 gæst")
        .required("Antal gæster er påkrævet"),
});

const BookingForm = () => {
    const { create } = useCrud();

    const [popup, setPopup] = useState({
        show: false,
        type: "",
        name: "",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            date: "",
            time: "",
            numberOfGuests: 2,
        },
    });

    const onSubmit = async (data) => {
        try {
            const startAt = new Date(
                `${data.date}T${data.time}`
            ).toISOString();

            const bookingData = {
                name: data.name,
                email: data.email,
                startAt: startAt,
                numberOfGuests: data.numberOfGuests,
            };

            await create("booking", bookingData);

            setPopup({
                show: true,
                type: "success",
                name: data.name,
            });

            reset();

        } catch (error) {
            console.error(
                "Fejl ved oprettelse af booking:",
                error
            );

            setPopup({
                show: true,
                type: "error",
                name: "",
            });
        }
    };

    const closePopup = () => {
        setPopup({
            show: false,
            type: "",
            name: "",
        });
    };

    return (
        <>

            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className={styles.title}>Din reservation</h1>
                <label htmlFor="name">
                    Fulde navn *
                </label>

                <input
                    id="name"
                    type="text"
                    placeholder="Indtast dit fulde navn"
                    {...register("name")}
                    disabled={isSubmitting}
                />

                {errors.name && (
                    <span className={styles.error}>
                        {errors.name.message}
                    </span>
                )}


                <label htmlFor="email">
                    Email *
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="Indtast din email"
                    {...register("email")}
                    disabled={isSubmitting}
                />

                {errors.email && (
                    <span className={styles.error}>
                        {errors.email.message}
                    </span>
                )}


                <div className={styles.dateTimeRow}>

                    <div className={styles.field}>
                        <label htmlFor="date">
                            Dato *
                        </label>

                        <input
                            id="date"
                            type="date"
                            {...register("date")}
                            disabled={isSubmitting}
                        />

                        {errors.date && (
                            <span className={styles.error}>
                                {errors.date.message}
                            </span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="time">
                            Tidspunkt *
                        </label>

                        <input
                            id="time"
                            type="time"
                            {...register("time")}
                            disabled={isSubmitting}
                        />

                        {errors.time && (
                            <span className={styles.error}>
                                {errors.time.message}
                            </span>
                        )}
                    </div>

                </div>


                <label htmlFor="numberOfGuests">
                    Antal gæster *
                </label>

                <input
                    id="numberOfGuests"
                    type="number"
                    min="1"
                    {...register("numberOfGuests", {
                        valueAsNumber: true,
                    })}
                    disabled={isSubmitting}
                />

                {errors.numberOfGuests && (
                    <span className={styles.error}>
                        {errors.numberOfGuests.message}
                    </span>
                )}


                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Booker..." : "Book bord"}
                </button>
            </form>


            {popup.show && (
                <div
                    className={`${styles.popup} ${styles[popup.type]}`}
                >
                    <div className={styles.card}>
                        <div className={styles.content}>
                            {popup.type === "success" ? (
                                <>
                                    <p>
                                        Tak for din booking{" "}
                                        {popup.name}!
                                    </p>

                                    <p>
                                        Vi har modtaget din booking.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        Der skete en fejl.
                                    </p>

                                    <p>
                                        Din booking blev ikke oprettet.
                                    </p>
                                </>
                            )}
                        </div>

                        <button
                            type="button"
                            className={styles.close}
                            onClick={closePopup}
                            aria-label="Luk"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingForm;