import "./css/CardSection.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext, useState } from "react";

function CardSection() {
  const { allRestaurant, filteredRestaurant, isLoading, searchInput } =
    useContext(RestaurantSearchFilter);

  const [IsActive, setIsActive] = useState(false);
  const filterHandler = () => {
    setIsActive(!IsActive);
  };
  //  className of tailwind for styling----
  const filterStyle =
    "py-2 px-3 select-none  cursor-pointer  text-[#02060CBF] font-gilroy-medium text-center sm:text-start rounded-2xl border border-[rgba(2,6,12,0.15)]  ";
  return (
    <>
      <div className="mainContainer w-full min-h-screen flex justify-center mt-7">
        <div className="dynamicContainer w-full px-1 sm:w-[80%]  min-h-full flex flex-col gap-3">
          <div className="headingContainer">
            <h1 className="font-gilroy-bold my-2  text-lg  md:text-xl lg:text-2xl text-start  leading-7 tracking-[-0.4px] text-wrap text-[rgba(2,6,12,0.92)]  ">
              Restaurants with online food delivery in Patna
            </h1>
          </div>
          <div className="filtersContainer  text-[#02060CBF] font-gilroy-medium text-sm ">
            <div className=" flex flex-wrap gap-5 p-1">
              <div
                className={`${filterStyle}  flex items-center gap-2 w-max ${
                  IsActive ? "" : ""
                }`}
                onClick={filterHandler}
              >
                <div>Filter</div> <i className="fa-solid fa-filter"></i>
              </div>

              <div className={`${filterStyle}  flex items-center gap-2 w-max`}>
                <div>Sort By</div> <i className="fa-solid fa-caret-down "></i>
              </div>

              <div className={`${filterStyle}`}>Pure Veg</div>
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
              {isLoading == true && searchInput == ""
                ? Array(8)
                    .fill("")
                    .map((_, index) => <Shimmer key={index} />)
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;
