import App from "../App.jsx";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";
import PublicRoute from "../utils/PublicRoute.jsx";

const Error = lazy(() => import("../pages/Error.jsx"));
const Offers = lazy(() => import("../pages/Offers.jsx"));
const Help = lazy(() => import("../pages/Help.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const SignUp = lazy(() => import("../pages/SignUp.jsx"));
const Cart = lazy(() => import("../pages/Cart.jsx"));
const RestaurantMenu = lazy(() => import("../pages/RestaurantMenu.jsx"));

import CardSection from "../Components/CardSection.jsx";
import Test from "../Components/Test.jsx";
import Profile from "../pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Navigate to="/restaurants" replace />,
      },
      {
        path: "restaurants",
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
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:name/:id/menu",
        element: <RestaurantMenu />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
