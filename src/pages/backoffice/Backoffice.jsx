import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styles from "./backoffice.module.css";

import DishesSection from "./components/dishesSection/DishesSection.jsx";
import DishForm from "./forms/dishesForm/Dishesform.jsx";

import BookingSection from "./components/bookingSection/BookingSection.jsx";

const Backoffice = () => {
  const { dishes, bookings } = useLoaderData();

  const [showForm, setShowForm] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleAdd = () => {
    setSelectedDish(null);
    setShowForm(true);
  };

  const handleEdit = (dish) => {
    setSelectedDish(dish);
    setShowForm(true);
  };

  const handleClose = () => {
    setSelectedDish(null);
    setShowForm(false);
  };

  return (
    <article className={styles.backoffice}>
      <h1 className={styles.header}>DASHBOARD</h1>

      <DishesSection
        dishes={dishes}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />

      {showForm && (
        <DishForm
          dish={selectedDish}
          onClose={handleClose}
        />
      )}

      <BookingSection
        bookings={bookings}
      />


    </article>
  );
};

export default Backoffice;

