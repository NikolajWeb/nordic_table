import styles from "./PageFooter.module.css";
import logo from "../../assets/icons/logoWhite.png";

// Icons
import FacebookIcon from "../../assets/icons/FacebookSVG.svg";
import InstagramIcon from "../../assets/icons/InstagramSVG.svg";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <p className={styles.infoText}>Nordisk køkken med fokus pa sæsonens råvarer, enkelhed og hygge. Velkommen til bordet.</p>
            <div className={styles.socialIcons}>
                <img src={FacebookIcon} alt="Facebook" className={styles.icon} />
                <img src={InstagramIcon} alt="Instagram" className={styles.icon} />
            </div>

            <div className={styles.openTime}>
                <p className={styles.openTimeHeading}>Åbningstider</p>
                <div className={styles.grid}>
                    <p className={styles.gridTitle}>Mandag</p>
                    <p className={styles.gridItem}>Lukket</p>
                    <p className={styles.gridTitle}>Tirsdag - Torsdag</p>
                    <p className={styles.gridItem}>17 - 22</p>
                    <p className={styles.gridTitle}>Fredag - Lørdag</p>
                    <p className={styles.gridItem}>17 - 23</p>
                    <p className={styles.gridTitle}>Søndag</p>
                    <p className={styles.gridItem}>12 - 20</p>
                </div>
            </div>


            <div className={styles.links}>
                <p className={styles.openTimeHeading}>Hurtige links</p>
                <p href="/" className={styles.gridItem}>Book bord</p>
                <p href="/" className={styles.gridItem}>Personale</p>


            </div>

            <div className={styles.contact}>
                <p className={styles.openTimeHeading}>Kontakt os</p>
                <div className={styles.contactContainer}>
                    <img src="https://img.icons8.com/ios-filled/50/null/marker.png" alt="Marker Icon" className={styles.contactIcon} />
                    <p className={styles.gridItem}>Nordgade 12, 9000 Aalborg</p>

                    <img src="https://img.icons8.com/ios-filled/50/null/phone.png" alt="Phone Icon" className={styles.contactIcon} />
                    <p className={styles.gridItem}>+45 12 34 56 78</p>

                    <img src="https://img.icons8.com/ios-filled/50/null/mail.png" alt="Mail Icon" className={styles.contactIcon} />
                    <p className={styles.gridItem}>info@nordictable.dk</p>
                </div>
            </div> 

            <div className={styles.copyright}>
                <p className={styles.copyrightText}>© 2026 Nordic Table. Alle rettigheder forbeholdes</p>
            </div>


        </footer>
    );
};

export default Footer;