import "./css/Header.css";
import { Link, useLocation } from "react-router-dom";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider.jsx";
import { useContext } from "react";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img className="w-14" src="/foodie-logo.png" alt="logo" />
      </Link>
    </div>
  );
}
function Hamburger() {
  return (
    <li className="block sm:hidden">
      <span>
        <i className="fa-solid fa-bars text-lg"></i>
      </span>
    </li>
  );
}
function NavLinks() {
  const { searchInput, handleSearch } = useContext(RestaurantSearchFilter);
  const location = useLocation();
  //Class of tailwind for styling----
  const commonLi =
    "flex items-center justify-center gap-2 no-underline list-none font-proxima-nova-regular text-base leading-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95 hover:text-[#b80000]  responsive **start //area    //mar-pad //visuals lg:gap-2  end**";
  return (
    <>
      <ul className=" nav-list hidden sm:flex  h-7 justify-center items-center gap-14   lg:h-7   lg:gap-14 ">
        <li className={`${commonLi} search-box`}>
          <span>
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </span>
          {location.pathname === "/" ? (
            <input
              className="search-box rounded-md text-lg cursor-pointer w-32 border border-black transition-all duration-300 ease-in-out focus:w-52 focus:h-8 //responsive **start //area lg:w-32 //mar-pad //visuals lg:focus-w-52 lg:focus-h-8 end**"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearch}
            />
          ) : null}
        </li>

        <Link to="offers">
          <li className={`${commonLi}`}>
            <span>
              <i className="fa-solid fa-tags lg:text-lg"></i>
            </span>
            Offers
          </li>
        </Link>

        <Link to="help">
          <li className={`${commonLi}`}>
            <span>
              <i className="fa-solid fa-circle-h lg:text-lg"></i>
            </span>
            Help
          </li>
        </Link>

        <Link to="login">
          <li className={`${commonLi}`}>
            <span>
              <i className="fa-regular fa-user lg:text-lg"></i>
            </span>
            Sign In
          </li>
        </Link>

        <Link to="cart">
          <li className={`${commonLi}`}>
            <span>
              <i className="fa-solid fa-cart-shopping lg:text-lg"></i>
            </span>
            Cart
          </li>
        </Link>
      </ul>
    </>
  );
}

function Header() {
  return (
    <div className=" header w-full min-h-20 sticky top-0 flex justify-between items-center px-6 lg:px-24 z-[1000] bg-white shadow-md  lg:min-h-20  //lg:px-24">
      <Logo />
      <NavLinks />
      <Hamburger />
    </div>
  );
}
export default Header;
