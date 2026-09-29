import "./App.css";
import { useRoutes, useLocation } from "react-router-dom";

/* Pages */
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Booking from "./pages/Booking.jsx";
import Login from "./pages/login/Login.jsx";
import Backoffice from "./pages/backoffice/Backoffice.jsx";
import NotFound from "./pages/404.jsx";

/* Nav - Footer */
import Navigation from "./components/navigation/Navigation.jsx";
import PageFooter from "./components/pageFooter/PageFooter.jsx";

/* Routes */
const routes = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/booking", element: <Booking /> },
  { path: "/login", element: <Login /> },
  { path: "/backoffice", element: <Backoffice /> },

  // 404
  { path: "*", element: <NotFound /> },
];

function App() {
  const element = useRoutes(routes);
  const location = useLocation();

  // Skjul footer på login og backoffice
  const isLoginPage = location.pathname === "/login";
  const isBackoffice = location.pathname === "/backoffice";

  const minimalLayout = isLoginPage || isBackoffice;

  return (
    <main>
      <Navigation />

      {element}

      {!minimalLayout && <PageFooter />}
    </main>
  );
}

export default App;