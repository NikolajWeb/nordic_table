import { useState } from "react";
import * as yup from "yup";

import styles from "./Login.module.css";

const loginSchema = yup.object({
    email: yup
        .string()
        .email("Indtast en gyldig email")
        .required("Email er påkrævet"),

    password: yup
        .string()
        .required("Password er påkrævet"),
});

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginSchema.validate(
                {
                    email,
                    password,
                },
                { abortEarly: false }
            );

            // Simulation af login
            window.location.href = "/backoffice";
        } catch (error) {
            const validationErrors = {};

            error.inner.forEach((err) => {
                validationErrors[err.path] = err.message;
            });

            setErrors(validationErrors);
        }
    };

    return (
        <article className={styles.loginContainer}>
            <div className={styles.title}>
                <h3>Login</h3>
            </div>

            <form
                className={styles.loginForm}
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {errors.password && (
                        <p>{errors.password}</p>
                    )}
                </div>

                <button type="submit">
                    Login
                </button>
            </form>
        </article>
    );
};

export default Login;