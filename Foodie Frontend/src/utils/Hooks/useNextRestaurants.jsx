const useNextRestaurants = () => {
  async function getNextRestaurants(setAllRestaurant) {
    try {
      const sessionId = sessionStorage.getItem("sessionId"); // Retrieve sessionId from sessionStorage

      if (!sessionId) {
        throw new Error("Session ID is missing");
      }
      const fetchedData = await fetch(
        "https://foodie-backend-so1x.onrender.com/api/v1/restaurants/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId, // Send sessionId in the request body
          }),
        }
      );

      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();

        const apiDataPath =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
