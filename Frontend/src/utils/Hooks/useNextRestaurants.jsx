import { RESTAURANTS_URL } from "../Constant";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const useNextRestaurants = () => {
  async function getNextRestaurants(setAllRestaurant) {
    try {
      const sessionId = sessionStorage.getItem("sessionId"); // Retrieve sessionId from sessionStorage

      if (!sessionId) {
        throw new Error("Session ID is missing");
      }

      const fetchedData = await fetch(`${RESTAURANTS_URL}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          nset789ewy8w7: `${VITE_API_KEY}`,
        },
        body: JSON.stringify({
          sessionId, // Send sessionId in the request body
        }),
      });

      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();

        const apiDataPath =
          json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setAllRestaurant((prev) => [...prev, ...apiDataPath]);
      } else {
        throw new Error("Failed to Fetch More Restaurants");
      }
    } catch (error) {
      console.error("Error fetching more restaurants:", error);
    }
  }
  return { getNextRestaurants };
};
export default useNextRestaurants;
