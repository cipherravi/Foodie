import { useParams } from "react-router-dom";

const useResturantsMenu = (setDataForHeader, setDataForMenu) => {
  const { id } = useParams();

  async function getRestaurantsMenu() {
    try {
      const fetchedData = await fetch(
        `https://foodie-backend-so1x.onrender.com/api/v1/restaurants/${id}`
      );

      if (fetchedData.ok) {
        const json = await fetchedData.json();

        const apiDataForHeader = json?.data?.cards[2]?.card?.card?.info;
        const apiDataForMenu =
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // Store data in state

        setDataForHeader(apiDataForHeader);
        setDataForMenu(apiDataForMenu);
      } else {
        throw new Error("Failed to Fetch Restaurant Menu Data");
      }
    } catch (error) {
      console.error("Error fetching Restaurant Menu Data:", error.message);
    }
  }
  return { getRestaurantsMenu };
};

export default useResturantsMenu;
