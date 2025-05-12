import { RESTAURANTS_URL } from "../Constant";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const useRestaurants = () => {
  async function getRestaurants(setAllRestaurant) {
    try {
      const fetchedData = await fetch(RESTAURANTS_URL, {
        headers: {
          nset789ewy8w7: `${VITE_API_KEY}`,
        },
      });

      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();
        // Store the sessionId in sessionStorage
        sessionStorage.setItem("sessionId", json.sessionId);

        const apiDataPath =
          json?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // const restaurantTitle = json?.data?.data?.cards[2]?.card?.card?.title;

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
