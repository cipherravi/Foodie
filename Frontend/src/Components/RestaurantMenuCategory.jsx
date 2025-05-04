import { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenuCategory = ({ dataForMenu }) => {
  const [rotatedIndexes, setRotatedIndexes] = useState({});
  const [collapsedIndexes, setCollapsedIndexes] = useState({});

  const handleClick = (index) => {
    setRotatedIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
    setCollapsedIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {dataForMenu.map((item, index) => {
        const categories = item?.card?.card?.categories;
        const itemCards = item?.card?.card?.itemCards;
        const title = item?.card?.card?.title;

        if (!title || title === "Top Picks") return null;

        const sectionKey = `item-${index}`;

        return (
          <div key={sectionKey}>
            <div className="menu-heading font-gilroy-bold text-sm lg:text-lg text-[#151920] my-10 w-full flex justify-between items-center pr-7">
              <span>
                {title}
                {itemCards ? ` (${itemCards.length})` : null}
              </span>
              <span
                className="dropdown font-gilroy-medium select-none text-lg cursor-pointer"
                onClick={() => handleClick(sectionKey)}
                style={{
                  display: "inline-block",
                  transition: "transform 0.2s ease",
                  transform: rotatedIndexes[sectionKey]
                    ? "rotate(0deg)"
                    : "rotate(180deg)",
                }}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>

            <div
              className="menu-section mt-10 w-full"
              style={{
                height: collapsedIndexes[sectionKey] ? "0" : "auto",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              {categories?.length > 0
                ? categories.map((category, catIdx) => {
                    const categoryKey = `cat-${index}-${catIdx}`;
                    return (
                      <div key={category?.categoryId || category?.title}>
                        <div className="category-title font-gilroy-bold text-sm lg:text-base text-[#151920] my-3 w-full flex justify-between items-center pr-7">
                          <span>
                            {category?.title}
                            {category?.itemCards
                              ? ` (${category?.itemCards.length})`
                              : null}
                          </span>
                          <span
                            className="dropdown font-gilroy-medium select-none text-lg cursor-pointer"
                            onClick={() => handleClick(categoryKey)}
                            style={{
                              display: "inline-block",
                              transition: "transform 0.2s ease",
                              transform: rotatedIndexes[categoryKey]
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          >
                            <i className="fa-solid fa-chevron-down"></i>
                          </span>
                        </div>
                        <div className="h-0.5 mr-3 my-auto bg-[#F2F2F3]"></div>
                        <div
                          className="menu-section mt-10 w-full"
                          style={{
                            height: collapsedIndexes[categoryKey] ? "auto" : 0,
                            overflow: "hidden",
                            transition: "height 0.3s ease",
                          }}
                        >
                          {category?.itemCards?.map((item) => (
                            <RestaurantMenuCard
                              key={item?.card?.info?.id}
                              {...item?.card?.info}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })
                : itemCards?.map((item) => (
                    <RestaurantMenuCard
                      key={item?.card?.info?.id}
                      {...item?.card?.info}
                    />
                  ))}
            </div>

            <div className="h-4 mr-3 my-auto bg-[#F2F2F3]"></div>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenuCategory;
