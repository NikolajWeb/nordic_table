import styles from "./MenuSection.module.css";

// IMG
import forretterImg from "../../assets/appetizers.png";
import hovedretterImg from "../../assets/mainCourses.png";
import dessertsImg from "../../assets/desserts.png";

// Rækkefølgen på kategorierne styres her
const CATEGORIES = [
    {
        key: "starter",
        title: "Forretter",
        image: forretterImg,
    },
    {
        key: "main",
        title: "Hovedretter",
        image: hovedretterImg,
    },
    {
        key: "dessert",
        title: "Desserter",
        image: dessertsImg,
    },
];

const MenuSection = ({ dishes = [] }) => {
    return (
        <section className={styles.MenuSectionContainer}>
            {CATEGORIES.map(({ key, title, image }) => {
                const categoryDishes = dishes.filter(
                    (dish) => dish.category === key
                );

                if (categoryDishes.length === 0) return null;

                return (
                    <div key={key} className={styles.Category}>
                        <header className={styles.CategoryHeader}>
                            <img
                                src={image}
                                alt={title}
                                className={styles.CategoryImage}
                            />

                            <h2 className={styles.CategoryTitle}>{title}</h2>
                        </header>

                        <ul className={styles.DishList}>
                            {categoryDishes.map((dish) => (
                                <li key={dish._id} className={styles.Dish}>
                                    <div className={styles.DishTop}>
                                        <h3>{dish.title}</h3>
                                    </div>

                                    <div className={styles.DishBottom}>
                                        <h4>{dish.description}</h4>
                                        <h4>{dish.price} kr.</h4>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </section>
    );
};

export default MenuSection;