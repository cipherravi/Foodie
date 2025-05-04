import { RESTAURANTS_URL } from "../Constant";

const useRestaurants = () => {
  async function getRestaurants(setAllRestaurant) {
    try {
      const fetchedData = await fetch(RESTAURANTS_URL);

      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();
        // Store the sessionId in sessionStorage
        sessionStorage.setItem("sessionId", json.sessionId);

        const apiDataPath =
          json?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // Store data in state and localStorage
        setAllRestaurant(apiDataPath);
      } else {
        throw new Error("Failed to Fetch Restaurants");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }
  return { getRestaurants };
};

export default useRestaurants;
