import styles from "./BookingSection.module.css";

// icons
import phoneIcon from "../../assets/icons/phone.svg";
import cutleryIcon from "../../assets/icons/cutlery.svg";
import clockIcon from "../../assets/icons/clock.svg";

// Form
import ReservationForm from "../bookingForm/BookingForm";

const BookingSection = () => {
    return (
        <section className={styles.BookingSectionContainer}>

            <div className={styles.BookingHeader}>
                <p className={styles.heading}>Gæstfrihed</p>
                <h1 className={styles.title}>Velkomst fra højre ben</h1>
                <p className={styles.description}>Vi ønsker at give dig og dine gæster den bedst mulige oplevelse. Her er hvad du skal vide inden dit besøg.</p>
            </div>

            <div className={styles.BookingContent}>

                <div className={styles.contentContainer}>
                    <img src={cutleryIcon} className={styles.contentImg} />
                    <div className={styles.contentText}>
                        <h2 className={styles.contentHeading}>Bordstørrelse</h2>
                        <p className={styles.contentDescription}>Vi tilbyder en bred vifte af bordstørrelser tilpasset dine behov.</p>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <img src={clockIcon} className={styles.contentImg} />
                    <div className={styles.contentText}>
                        <h2 className={styles.contentHeading}>Åbningstider</h2>
                        <p className={styles.contentDescription}>Tirsdag-torsdag kl. 17-22. Fredag-lørdag kl. 17-23. Søndag kl. 12-20. Mandag lukket.</p>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <img src={phoneIcon} className={styles.contentImg} />
                    <div className={styles.contentText}>
                        <h2 className={styles.contentHeading}>Kontakt</h2>
                        <p className={styles.contentDescription}>Ring på +45 12 34 56 78 eller skriv til info@nordictable.dk ved spørgsmål.</p>
                    </div>
                </div>

            </div>

            <ReservationForm />



        </section>
    );
};

export default BookingSection;