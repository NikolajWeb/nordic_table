import { useLoaderData } from "react-router-dom";

// Components
import SignaturSection from "../components/signaturSection/SignaturSection";
import AboutUs from "../components/aboutUs/AboutUs";

const Home = () => {
    const { dishes } = useLoaderData();

    return (
        <article>
            <h1>Forside</h1>

            <SignaturSection dishes={dishes} />
            <AboutUs />
        </article>
    );
};

export default Home;