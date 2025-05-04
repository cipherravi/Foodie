import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error.jsx";
import Offers from "../pages/Offers.jsx";
import Help from "../pages/Help.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Cart from "../pages/Cart.jsx";
import RestaurantMenu from "../pages/RestaurantMenu.jsx";
import CardSection from "../Components/CardSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <CardSection />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:name/:id/menu",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default router;
