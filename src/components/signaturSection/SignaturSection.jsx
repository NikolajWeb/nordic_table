import styles from "./SignaturSection.module.css";

const SignaturSection = ({ dishes = [] }) => {
    const signaturretter = dishes.filter(
        (dish) => dish.isSignature === true
    );

    return (
        <section className={styles.signaturSection}>
            <div className={styles.HeadingContainer}>
                <p className={styles.Heading}>
                    Udvalgte retter
                </p>

                <h1 className={styles.title}>
                    Vores signaturretter
                </h1>

                <p className={styles.description}>
                    Hver af vores signaturretter er omhyggeligt
                    sammensat af sæsonens bedste nordiske råvarer.
                </p>
            </div>

            <div className={styles.signaturContainer}>
                {signaturretter.map((dish) => (
                    <article key={dish._id}>
                        <img
                            src={dish.image}
                            alt={dish.title}
                            className={styles.img}
                        />

                        <div className={styles.signaturTag}>
                            Signatur
                        </div>

                        <div className={styles.infoContainer}>
                            <p className={styles.dishCategory}>
                                {dish.category}
                            </p>

                            <h2 className={styles.signaturTitle}>
                                {dish.title}
                            </h2>

                            <p className={styles.signaturDescription}>
                                {dish.description}
                            </p>

                            <h3 className={styles.signaturPrice}>
                                {dish.price} kr.
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SignaturSection;