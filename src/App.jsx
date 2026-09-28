import "./App.css";
import { useRoutes } from "react-router-dom";

/* Pages */
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Booking from "./pages/Booking.jsx";

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
      {element}
    </main>
  );
}

export default App;