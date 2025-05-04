import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import Providers from "./utils/Context/Providers.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
