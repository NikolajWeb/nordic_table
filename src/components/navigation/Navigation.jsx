import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

import burgerIcon from "../../assets/icons/burger_icon.svg";
import xIcon from "../../assets/icons/x_icon.svg";
import logo from "../../assets/icons/logoBlack.png";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navigation}>
            <div className={styles.burger} onClick={toggleMenu}>
                <img
                    src={menuOpen ? xIcon : burgerIcon}
                    alt={menuOpen ? "Luk menu" : "Åbn menu"}
                    className={menuOpen ? styles.closeIcon : ""}
                />
            </div>

            <div
                className={`${styles.navOverlay} ${
                    menuOpen ? styles.navOverlayActive : ""
                }`}
            >
                <img
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                />

                <ul className={styles.navLinks}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Forside
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/menu"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Menu
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/booking"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Book bord
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Log ind
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;