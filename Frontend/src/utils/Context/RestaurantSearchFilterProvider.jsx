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
        }),
        [
          allRestaurant,
          setAllRestaurant,
          filteredRestaurant,
          setFilteredRestaurant,
          searchInput,
          setSearchInput,
          handleSearch,
        ]
      )}
    >
      {children}
    </RestaurantSearchFilter.Provider>
  );
}

export default RestaurantSearchFilterProvider;
export { RestaurantSearchFilter };
