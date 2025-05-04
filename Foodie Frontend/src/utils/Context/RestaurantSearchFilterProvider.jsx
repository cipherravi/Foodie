import { useState, useEffect, createContext } from "react";
import useRestaurants from "../Hooks/useRestaurants";
import useRestaurantFilteredData from "../Hooks/useRestaurantFilteredData";
import useIntervalRefresh from "../Hooks/useIntervalRefresh";
import useNextRestaurants from "../Hooks/useNextRestaurants";

// Create a context
const RestaurantSearchFilter = createContext();

function RestaurantSearchFilterProvider({ children }) {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(allRestaurant);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e?.target?.value);
  };

  const { getRestaurants } = useRestaurants();

  // Filter restaurant list based on search input
  useEffect(() => {
    const { filteredData } = useRestaurantFilteredData(
      allRestaurant,
      searchInput
    );

    return setFilteredRestaurant(filteredData);
  }, [allRestaurant, searchInput]);
  useEffect(() => {
    getRestaurants(setAllRestaurant);

    // Fetch restaurant data
  }, []);
  // //  Fetch restaurant data
  // useEffect(() => {
  //   const storedData = sessionStorage.getItem("allRestaurant");
  //   const storedTimestamp = sessionStorage.getItem("dataTimestamp");

  //   // Check if the data exists and is not too old (e.g., older than 10 min)
  //   if (
  //     storedData &&
  //     storedTimestamp &&
  //     Date.now() - storedTimestamp < 600000
  //   ) {
  //     // Use stored data if it's fresh (less than 10 min old)
  //     setAllRestaurant(JSON.parse(storedData));
  //   } else {
  //     // Fetch new data if no data or data is stale
  //     getRestaurants((data) => {
  //       setAllRestaurant(data);
  //       sessionStorage.setItem("allRestaurant", JSON.stringify(data));
  //       sessionStorage.setItem("dataTimestamp", Date.now().toString());
  //     });
  //   }
  // }, []);

  // // Use custom hook to handle interval-based refresh
  // useIntervalRefresh(getRestaurants);

  return (
    <RestaurantSearchFilter.Provider
      value={{
        allRestaurant,
        setAllRestaurant,
        filteredRestaurant,
        setFilteredRestaurant,
        searchInput,
        setSearchInput,
        handleSearch,
      }}
    >
      {children}
    </RestaurantSearchFilter.Provider>
  );
}

export default RestaurantSearchFilterProvider;
export { RestaurantSearchFilter };

// const { getNextRestaurants } = useNextRestaurants();
// // Fetch more restaurants when the user scrolls to the bottom
// const handleScroll = () => {
//   if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
//     getNextRestaurants(setAllRestaurant);
//   }
// };
// // Add scroll event listener
// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);
