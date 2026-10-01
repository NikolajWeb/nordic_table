import { useLoaderData } from "react-router-dom";

// Components
import PageHeader from "../components/pageHeader/PageHeader";
import SignaturSection from "../components/signaturSection/SignaturSection";
import AboutUs from "../components/aboutUs/AboutUs";
import BookingCard from "../components/bookingCard/BookingCard";

const Home = () => {
    const { dishes } = useLoaderData();

    return (
        <article>

            <PageHeader
                variant="high"
                Heading="Velkomst"
                Title="Smag det nordiske"
                Description="Nordic Table er et sted, hvor sæsonens bedste råvarer forvandles til uforglemmelige oplevelser. Ro, kvalitet og hygge i hvert eneste måltid."
            />

            <SignaturSection dishes={dishes} />

            <AboutUs />

            <BookingCard />

        </article>
    );
};

export default Home; 