import "./css/CardSection.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext, useState } from "react";

function CardSection() {
  const { allRestaurant, filteredRestaurant } = useContext(
    RestaurantSearchFilter
  );
  const [IsActive, setIsActive] = useState(false);
  const filterHandler = () => {
    setIsActive(!IsActive);
  };
  //class of tailwind for styling----
  const filterStyle =
    "py-2 select-none  cursor-pointer text-[#02060CBF] font-gilroy-medium text-center sm:text-start";
  return (
    <>
      <div className="mainContainer w-full min-h-full flex justify-center mt-7">
        <div className="dynamicContainer w-full px-1 sm:w-[80%]  min-h-full flex flex-col gap-3">
          <div className="headingContainer">
            <h1 className="font-gilroy-bold my-2  text-lg  md:text-xl lg:text-2xl text-start  leading-7 tracking-[-0.4px] text-wrap text-[rgba(2,6,12,0.92)]  ">
              Restaurants with online food delivery in Patna
            </h1>
          </div>
          <div className="filtersContainer  gap-3 text-[#02060CBF] font-gilroy-medium text-sm flex   p-2">
            <div className="border rounded-3xl p-1">
              <div
                className={`${filterStyle} ${IsActive ? "" : ""}`}
                onClick={filterHandler}
              >
                Delivery Time
              </div>
            </div>
            <div className="border rounded-3xl p-1">
              <div className={`${filterStyle}`}>Ratings 4.0+</div>
            </div>
            <div className="border rounded-3xl p-1">
              <div className={`${filterStyle}`}>Low Cost</div>
            </div>
            <div className="border rounded-3xl p-1">
              <div className={`${filterStyle}`}>High Cost</div>
            </div>
          </div>
          <div className="cardsContainer">
            <div className="cards-section w-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
              {!Array.isArray(allRestaurant) || allRestaurant.length === 0 ? (
                Array(8)
                  .fill("")
                  .map((_, index) => <Shimmer key={index} />)
              ) : filteredRestaurant?.length > 0 ? (
                filteredRestaurant.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant?.info?.id}
                    {...restaurant?.info}
                  />
                ))
              ) : (
                <p className="absolute top-[calc(50vh-50px)] left-1/2 transform -translate-x-1/2 text-xl font-proxima-nova-regular">
                  No restaurants found matching your search.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;
