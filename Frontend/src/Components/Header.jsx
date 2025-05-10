import "./css/Header.css";
import { Link, useLocation } from "react-router-dom";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider.jsx";
import { useContext, useState, useEffect, useRef } from "react";

function Logo() {
  const { setSearchInput } = useContext(RestaurantSearchFilter);
  const { pathname } = useLocation();
  return (
    <div
      className="logo"
      onClick={() => (pathname === "/restaurants" ? setSearchInput("") : null)}
    >
      <Link to="/restaurants">
        <img className="w-14" src="/foodie-logo.png" alt="logo" />
      </Link>
    </div>
  );
}

function PhoneNav({ isOpen, setIsOpen, commonLi, searchInput, handleSearch }) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden flex flex-row-reverse gap-4">
      <li
        className="list-none font-proxima-nova-regular leading-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95 hover:text-[#b80000] lg:gap-2"
        onClick={toggleMenu}
      >
        <span>
          <i className="fa-solid fa-bars text-xl"></i>
        </span>
      </li>

      <Link to="cart">
        <li className="flex items-center justify-center gap-2 no-underline list-none font-proxima-nova-regular text-base leading-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95 hover:text-[#b80000]">
          <span>
            <i className="fa-solid fa-cart-shopping text-xl "></i>
          </span>
        </li>
      </Link>
      <li className={`${commonLi} search-box`}>
        <span>
          <i className="fa-solid fa-magnifying-glass text-lg"></i>
        </span>
        {location.pathname === "/" ? (
          <input
            className="search-box rounded-md text-lg cursor-pointer w-32 border border-black transition-all duration-300 ease-in-out focus:w-44 focus:h-8"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearch}
          />
        ) : null}
      </li>
    </div>
  );
}

function NavLinks({ isOpen, navRef, commonLi, searchInput, handleSearch }) {
  return (
    <>
      {/* ✅ Changed wrapper from <ul> to <div> to better control absolute positioning */}
      <div
        ref={navRef}
        className={`sm:hidden fixed top-20 right-0 w-1/2 rounded-b-lg h-1/3  bg-white shadow-md z-50 transform transition-all duration-300 ease-in-out  ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 justify-around h-full">
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
      </div>

      {/* ✅ Desktop nav stays as it is */}
      <ul className="hidden sm:flex sm:items-center sm:gap-6 lg:gap-10">
        <li className={`${commonLi} search-box`}>
          <span>
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </span>
          {
            <input
              className="search-box rounded-md text-lg cursor-pointer w-32 border border-black transition-all duration-300 ease-in-out focus:w-52 focus:h-8"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearch}
            />
          }
        </li>
        <Link to="offers">
          <li className={commonLi}>
            <span>
              <i className="fa-solid fa-tags lg:text-lg"></i>
            </span>
            Offers
          </li>
        </Link>
        <Link to="help">
          <li className={commonLi}>
            <span>
              <i className="fa-solid fa-circle-h lg:text-lg"></i>
            </span>
            Help
          </li>
        </Link>
        <Link to="login">
          <li className={commonLi}>
            <span>
              <i className="fa-regular fa-user lg:text-lg"></i>
            </span>
            Sign In
          </li>
        </Link>
        <Link to="cart">
          <li className={commonLi}>
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
  const { searchInput, handleSearch } = useContext(RestaurantSearchFilter);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  // ✅ Detect outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const commonLi =
    "flex items-center justify-center gap-2 no-underline list-none font-proxima-nova-regular text-base leading-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95 hover:text-[#b80000] lg:gap-2";

  return (
    <div className="header w-full min-h-20 sticky top-0 flex justify-between items-center px-6 lg:px-24 z-30 bg-white shadow-md">
      <Logo />
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"></div>
      )}
      <NavLinks
        isOpen={isOpen}
        navRef={navRef}
        commonLi={commonLi}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <PhoneNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        commonLi={commonLi}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default Header;
