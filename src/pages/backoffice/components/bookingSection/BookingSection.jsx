import { useCrud } from "../../../../hooks/useCrud";
import styles from "./BookingSection.module.css";

const BookingSection = ({ bookings = [], onAdd, onEdit }) => {
    const { remove } = useCrud();

    const handleDelete = async (booking) => {
        const confirmed = window.confirm(
            `Er du sikker på, at du vil slette ${booking.title}?`
        );

        if (!confirmed) return;

        try {
            await remove("booking", booking._id);
        } catch (error) {
            console.error("Kunne ikke slette retten:", error);
        }
    };

    const formatDateTime = (date) => {
        return new Date(date).toLocaleString("da-DK", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };


    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>Resevationer</h2>

                <button type="button" onClick={onAdd}>
                    Tilføj resevation
                </button>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Fulde Navn</th>
                        <th>Email</th>
                        <th>Gæster</th>
                        <th>Tidspunkt</th>
                        <th>Status</th>
                        <th>Handlinger</th>
                    </tr>
                </thead>

                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}>
                            <td>{booking.name}</td>

                            <td>{booking.email}</td>

                            <td>{booking.numberOfGuests}</td>

                            <td>{formatDateTime(booking.startAt)}</td>

                            <td>
                                {booking.status}
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={() => onEdit(booking)}
                                >
                                    Rediger
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDelete(booking)}
                                >
                                    Slet
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {bookings.length === 0 && (
                <p>Der er ingen retter endnu.</p>
            )}
        </section>
    );
};

export default BookingSection;