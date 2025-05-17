// import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Outlet />
      {/* <Footer /> */}
      <ScrollRestoration
        getKey={(location) =>
          // Disable restoration for /restaurants (it keeps current scroll)
          location.pathname.startsWith("/restaurants") ? false : location.key
        }
      />
    </>
  );
}

export default App;
