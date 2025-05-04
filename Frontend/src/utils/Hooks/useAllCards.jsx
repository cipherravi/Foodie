import { useState, useEffect } from "react";

const useAllCards = ({ dataForMenu }) => {
  const [finalData, setFinalData] = useState([]);
  // Extract all nested cards from categories & itemCards , it only once
  useEffect(() => {
    const items = [];

    dataForMenu.forEach((item) => {
      const categories = item?.card?.card?.categories;
      const itemCards = item?.card?.card?.itemCards;
      itemCards?.forEach((card) => {
        if (card?.card?.info) {
          items.push(card.card.info);
        }
      });
      // If categories exist, extract itemCards from them

      categories?.forEach((category) => {
        category?.itemCards?.forEach((card) => {
          if (card?.card?.info) {
            items.push(card.card.info);
          }
        });
      });
    });
    // ✅ Deduplicate by item.id
    const uniqueItems = Array.from(
      new Map(items.map((item) => [item.id, item])).values()
    );

    setFinalData(uniqueItems);
  }, [dataForMenu]);
  return { finalData };
};

export default useAllCards;
