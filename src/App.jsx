import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  useLocation,
} from "react-router-dom";

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

/* Loaders */
import backofficeLoader from "./loaders/DataLoaders.jsx";

/* Layout */
function AppLayout() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isBackoffice = location.pathname === "/backoffice";

  const minimalLayout = isLoginPage || isBackoffice;

  return (
    <main>
      <Navigation />

      <Outlet />

      {!minimalLayout && <PageFooter />}
    </main>
  );
}

/* Router */
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: backofficeLoader,
      },

      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/booking",
        element: <Booking />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/backoffice",
        element: <Backoffice />,
        loader: backofficeLoader,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
export default AppLayout;