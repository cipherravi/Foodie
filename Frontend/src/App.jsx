// import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTOp";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
