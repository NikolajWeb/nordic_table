import "./App.css";
import { useRoutes } from "react-router-dom";

/* Pages */
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Booking from "./pages/Booking.jsx";

/* Nav - Footer */
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/pageFooter/PageFooter.jsx";


/* Routes */
const routes = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/booking", element: <Booking /> },
];

function App() {
  const element = useRoutes(routes);

  return (
    <main>
      <Navigation />
      {element}
      <Footer />
    </main>
  );
}

export default App;