import styles from "./AboutUs.module.css";

// BG
import imgHero from "../../assets/restaurant.png";

const AboutUs = () => {
    return (
        <section className={styles.AboutUsContainer}>
            <img src={imgHero} alt="Restaurant" className={styles.imgHero} />

            <div className={styles.AboutUsInfo}>
                <p className={styles.AboutUsHeading}>Om os</p>
                <h2 className={styles.AboutUsTitle}>En restaurant båret af nærhed og nærvær</h2>
            </div>

            <div className={styles.AboutUsText}>
                <p className={styles.AboutUsDescription}>
                    Nordic Table er grundlagt med en klar overbevisning: god mad behøver ikke at være kompliceret. Vi laver mad af det, naturen giver os - det nordiske køkkens uforlignelige råvarer.
                </p>
                <p className={styles.AboutUsDescription2}>
                    Fra de friske fiskefarvande til skovens bær og urter - vores menu forandrer sig med årstidens rytme. Det giver gæsterne noget nyt at opdage, og det giver os glæden ved at lave mad med det bedste, vi kan få fat i.
                </p>
            </div>

            <div className={styles.AboutUsCTA}>
                <div className={styles.AboutUsCTAItem}>
                    <h3 className={styles.AboutUsCTANumber}>12</h3>
                    <h3 className={styles.AboutUsCTALabel}>Retter på menuen</h3>
                </div>

                <div className={styles.AboutUsCTAItem}>
                    <h3 className={styles.AboutUsCTANumber}>6</h3>
                    <h3 className={styles.AboutUsCTALabel}>Års erfaring</h3>
                </div>

                <div className={styles.AboutUsCTAItem}>
                    <h3 className={styles.AboutUsCTANumber}>100</h3>
                    <h3 className={styles.AboutUsCTALabel}>% nordiske råvarer</h3>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;