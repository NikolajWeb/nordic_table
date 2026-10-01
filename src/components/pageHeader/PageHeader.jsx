import styles from "./PageHeader.module.css";
import Button from "../button/Button";

const PageHeader = ({
    Heading,
    Title,
    Description,
    variant = "default",
}) => {
    return (
        <section className={`${styles.PageHeader} ${styles[variant] || ""}`}>
            <p className={styles.PageHeaderHeading}>{Heading}</p>

            <h1 className={styles.PageHeaderTitle}>{Title}</h1>

            <p className={styles.PageHeaderDescription}>{Description}</p>

            {variant === "high" && (
                <div className={styles.PageHeaderButtonContainer}>
                    <Button
                    variant="primary"
                    buttonText="Book bord"
                    whereToGo="/booking"
                    />
                    <Button
                    variant="white"
                    buttonText="Se menuen"
                    whereToGo="/menu" 
                    />
                </div>
            )}
        </section>
    );
};

export default PageHeader;