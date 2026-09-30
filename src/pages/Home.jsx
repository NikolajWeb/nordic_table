import { useLoaderData } from "react-router-dom";
import SignaturSection from "../components/signaturSection/SignaturSection";

const Home = () => {
    const { dishes } = useLoaderData();

    return (
        <article>
            <h1>Forside</h1>

            <SignaturSection dishes={dishes} />
        </article>
    );
};

export default Home;