import styles from "./BookingCard.module.css";

// BTN
import Button from "../button/Button";



const BookingCard = () => {
    return (
        <section className={styles.BookingCardContainer}>
            <p className={styles.BookingCardHeading}>Resevationer</p>
            <h1 className={styles.BookingCardTitle}>Book dit bord hos Nordic Table</h1>
            <p className={styles.BookingCardDescription}>Vi åbner vores døre for dig og dine, og giver jer en aften I aldrig glemmer. Book dit bord i dag - det er nemt og hurtigt.</p>
            <Button buttonText="book bord nu" variant="primary" whereToGo="/booking" />
        </section>
        
    );
};

export default BookingCard;