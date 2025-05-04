import "./css/RestaurantMenuSection.css";
import { useEffect, useState } from "react";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

function RestaurantMenuSection({ dataForMenu }) {
  const [restaurantMenuData, setRestaurantMenuData] = useState("");

  // path : json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[i] // Category
  //card : path.card.card.itemCards[i].card.info. // Item

  useEffect(() => {
    setRestaurantMenuData(dataForMenu);
  }, []);

  return !restaurantMenuData || restaurantMenuData.length === 0 ? null : (
    <>
      <RestaurantMenuCategory dataForMenu={dataForMenu} />
    </>
  );
}
export default RestaurantMenuSection;
