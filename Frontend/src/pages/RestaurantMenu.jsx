import "./css/RestaurantMenu.css";
import { useEffect, useState } from "react";

import ShimmerMenu from "../Components/ShimmerMenu";
import useResturantsMenu from "../utils/Hooks/useResturantsMenu";
import RestaurantMenuHeader from "../Components/RestaurantMenuHeader";
import RestaurantMenuSection from "../Components/RestaurantMenuSection";
import RestaurantMenuCard from "../Components/RestaurantMenuCard";
import useAllCards from "../utils/Hooks/useAllCards";
import useItemFilter from "../utils/Hooks/useItemFilter";

function RestaurantMenu() {
  const [dataForHeader, setDataForHeader] = useState([]);
  const [dataForMenu, setDataForMenu] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { getRestaurantsMenu } = useResturantsMenu(
    setDataForHeader,
    setDataForMenu
  );
  const { finalData } = useAllCards({ dataForMenu });

  useEffect(() => {
    getRestaurantsMenu();
  }, []);
  useEffect(() => {
    const { filteredData } = useItemFilter(finalData, searchInput);
    setFilteredData(filteredData);
  }, [searchInput]);

  return dataForHeader.length === 0 ? (
    <ShimmerMenu /> // If data is not fetched, show shimmer
  ) : (
    <>
      <div className="mainContainer pt-3 w-full min-h-full flex justify-center  ">
        <div className="box w-[85%] mt-5 pt-14 //responsive **start //area lg:w-[55%]  //mar-pad lg:mt-5 lg:pt-14 end**">
          <RestaurantMenuHeader dataForHeader={dataForHeader} />
          <div className="menu mt-7 mb-5 w-full text-center">
            <span className="//visuals font-gilroy-medium text-xs lg:text-base">
              -Menu-
            </span>
          </div>
          <div className="search-bar w-full relative">
            <input
              className="w-full h-12 border-transparent rounded-xl outline-none bg-[#f2f2f3] text-base font-gilroy-medium text-center cursor-pointer"
              type="text"
              placeholder={"Search for dishes"}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="search-icon absolute top-3.5 right-5 text-[#6d7073]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="horizontal-rule"></div>
          <div>
            {searchInput.length === 0 ? (
              <RestaurantMenuSection dataForMenu={dataForMenu} />
            ) : filteredData?.length > 0 ? (
              filteredData?.map((item) => {
                return <RestaurantMenuCard key={item?.id} {...item} />;
              })
            ) : (
              <div className="w-full min-h-[35vh] flex justify-center items-center  text-xl font-proxima-nova-regular">
                <p className="text-xs lg:text-base text-[#6d7073]">
                  No restaurants found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default RestaurantMenu;
