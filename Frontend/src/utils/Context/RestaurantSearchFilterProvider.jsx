import { useState, useEffect, createContext, useRef, useMemo } from "react";
import useRestaurants from "../Hooks/useRestaurants";
import useRestaurantFilteredData from "../Hooks/useRestaurantFilteredData";

import useNextRestaurants from "../Hooks/useNextRestaurants";

// Create a context
const RestaurantSearchFilter = createContext();

function RestaurantSearchFilterProvider({ children }) {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(allRestaurant);
  const [searchInput, setSearchInput] = useState("");
  const isThrottled = useRef(false);
  const [isLoading, setIsLoading] = useState(false);

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
  const { getNextRestaurants } = useNextRestaurants();
  // Fetch more restaurants when the user scrolls to the bottom
  const handleScroll = async () => {
    if (isThrottled.current) return;
    try {
      if (
        window.innerHeight + window.scrollY + 300 >=
        document.body.scrollHeight
      ) {
        setIsLoading(true);
        isThrottled.current = true;
        await getNextRestaurants(setAllRestaurant);
        setTimeout(() => {
          isThrottled.current = false;
        }, 1000);
      }
    } finally {
      setIsLoading(false);
    }
  };
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <RestaurantSearchFilter.Provider
      value={useMemo(
        () => ({
          allRestaurant,
          setAllRestaurant,
          filteredRestaurant,
          setFilteredRestaurant,
          searchInput,
          setSearchInput,
          handleSearch,
          isLoading,
        }),
        [
          allRestaurant,
          setAllRestaurant,
          filteredRestaurant,
          setFilteredRestaurant,
          searchInput,
          setSearchInput,
          handleSearch,
          isLoading,
        ]
      )}
    >
      {children}
    </RestaurantSearchFilter.Provider>
  );
}

export default RestaurantSearchFilterProvider;
export { RestaurantSearchFilter };
