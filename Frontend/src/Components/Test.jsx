import "./css/CardSection.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext, useCallback, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";

const columnCount = 4;
const columnWidth = 350;
const rowHeight = 350;

function CardSection() {
  const {
    allRestaurant,
    filteredRestaurant,
    isLoading,
    searchInput,
    fetchMoreRestaurants,
  } = useContext(RestaurantSearchFilter);

  const [isFilterActive, setIsFilterActive] = useState(false);
  const items =
    filteredRestaurant && filteredRestaurant.length > 0
      ? filteredRestaurant
      : allRestaurant;

  const rowCount = Math.ceil(items.length / columnCount);

  const handleItemsRendered = useCallback(
    ({ visibleRowStopIndex }) => {
      const isNearBottom = visibleRowStopIndex >= rowCount - 2;
      if (isNearBottom && !isLoading && searchInput === "") {
        fetchMoreRestaurants?.();
      }
    },
    [rowCount, isLoading, searchInput, fetchMoreRestaurants]
  );

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const item = items[index];

    return (
      <div style={style}>
        {item ? (
          <RestaurantCard key={item?.info?.id} {...item.info} />
        ) : (
          <Shimmer />
        )}
      </div>
    );
  };

  return (
    <div className="mainContainer w-full min-h-screen flex  mt-7">
      <div className="dynamicContainer w-full px-1 sm:w-[80%]  min-h-full flex flex-col gap-3">
        <div className="headingContainer">
          <h1 className="font-gilroy-bold my-2 text-lg md:text-xl lg:text-2xl text-start leading-7 tracking-[-0.4px] text-wrap text-[rgba(2,6,12,0.92)]">
            Restaurants with online food delivery in Patna
          </h1>
        </div>

        {/* Filters */}
        <div className="filtersContainer text-[#02060CBF] font-gilroy-medium text-sm">
          <div className="flex flex-wrap gap-5 p-1">
            <div
              className="py-2 px-3 border rounded-2xl flex items-center gap-2 w-max cursor-pointer"
              onClick={() => setIsFilterActive(!isFilterActive)}
            >
              <div>Filter</div> <i className="fa-solid fa-filter"></i>
            </div>
            <div className="py-2 px-3 border rounded-2xl flex items-center gap-2 w-max">
              <div>Sort By</div> <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className="py-2 px-3 border rounded-2xl">Pure Veg</div>
          </div>
        </div>

        {/* Grid */}
        <div className="cardsContainer">
          {items.length === 0 && !isLoading ? (
            <p className="absolute top-[calc(50vh-50px)] left-1/2 transform -translate-x-1/2 text-xl font-proxima-nova-regular">
              No restaurants found matching your search.
            </p>
          ) : (
            <Grid
              columnCount={columnCount}
              columnWidth={columnWidth}
              height={600}
              rowCount={rowCount}
              rowHeight={rowHeight}
              width={columnCount * columnWidth}
              onItemsRendered={handleItemsRendered}
            >
              {Cell}
            </Grid>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
