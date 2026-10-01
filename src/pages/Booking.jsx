
// Components
import PageHeader from "../components/pageHeader/PageHeader";
import BookingSection from "../components/bookingSection/BookingSection";

const Booking = () => {

  return (
    <article>
      <PageHeader
        variant="low"
        Heading="Reservationer"
        Title="Book dit bord"
        Description="Vi glæder os til at modtage dig. Book dit bord nedenfor, og vi sørger for resten."
      />
      <BookingSection />
    </article>
  );
};

export default Booking;