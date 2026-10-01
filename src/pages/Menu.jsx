import { useLoaderData } from "react-router-dom";

// Components
import PageHeader from "../components/pageHeader/PageHeader";
import MenuSection from "../components/menuSection/MenuSection";

const Menu = () => {
   const { dishes } = useLoaderData();


  return (
    <article>
      <PageHeader
        variant="low"
        Heading="Vores menu"
        Title="Smagsoplevelser fra det nordiske køkken"
        Description="Alt på vores menu er tilberedt af sæsonens friskeste råvarer. Vi arbejder tæt med lokale producenter for at sikre den bedste kvalitet."
      />
      <MenuSection dishes={dishes} />
    </article>
  );
};

export default Menu;