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

  //Data for Menu Footer
  const licenseobject = dataForMenu.length - 2;
  const restaurantInfoObject = dataForMenu.length - 1;
  const fssaiImg =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i";
  const licenseNumber = dataForMenu[licenseobject]?.card?.card?.text[0];

  const {
    area = "",
    completeAddress = "",
    name = "",
  } = dataForMenu[restaurantInfoObject]?.card?.card || {};

  return dataForHeader.length === 0 ? (
    <ShimmerMenu /> // If data is not fetched, show shimmer
  ) : (
    <>
      <div className="mainContainer  w-full min-h-full flex justify-center  ">
        <div className="box w-[85%]  mt-7 lg:mt-12 lg:w-[55%] md:w-[70%] ">
          <RestaurantMenuHeader dataForHeader={dataForHeader} />
          <div className="menu mt-7 mb-5 w-full text-center">
            <span className=" font-gilroy-medium text-xs lg:text-base">
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
          <div className="lg:w-[98.5%] lg:h-64  bg-[#F0F0F5] px-5 flex flex-col gap-4 text-[#787B80]">
            <div className="flex items-center gap-4">
              <img className="w-16" src={fssaiImg} alt="Fssai Image" />
              <p className="text-sm">{licenseNumber}</p>
            </div>
            <p className="w-full h-[1px] bg-[#929398]"></p>
            <div className="flex flex-col gap-4">
              <div className="text-sm">
                <p className="font-gilroy-bold ">{name}</p>
                <p>(Outlet:{area})</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i>{" "}
                <p className="text-xs">{completeAddress}</p>
              </div>
              <p className="w-full h-[1px] mt-3 bg-[#929398]"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RestaurantMenu;
