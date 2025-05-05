import { useParams } from "react-router-dom";
import { RESTAURANTS_URL } from "../Constant";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const useResturantsMenu = (setDataForHeader, setDataForMenu) => {
  const { id } = useParams();

  async function getRestaurantsMenu() {
    try {
      const fetchedData = await fetch(`${RESTAURANTS_URL}/${id}`, {
        headers: {
          authorization: `${VITE_API_KEY}`,
        },
      });

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
