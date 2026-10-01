import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";

const Button = ({
  buttonText,
  variant = "default",
  whereToGo,
}) => {
  return (
    <NavLink
      to={whereToGo}
      className={`${styles.button} ${styles[variant] || ""}`}
    >
      {buttonText}
    </NavLink>
  );
};

export default Button;