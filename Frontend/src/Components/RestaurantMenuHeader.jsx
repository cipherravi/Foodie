function RestaurantMenuHeader({ dataForHeader }) {
  const {
    name,
    avgRating,
    avgRatingString,
    totalRatings,
    totalRatingsString,
    costForTwo,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = dataForHeader;
  // //layout //area //ressponsive //visuals
  // //responsive **start //area  //mar-pad end**
  return (
    <>
      <h1 className="restaurant-title //visuals font-gilroy-bold text-xl text-[#02060ceb] //mar-pad pl-2 mb-6 //responsive **start //area  //mar-pad lg:pl-2 lg:mb-6 lg:text-2xl end**">
        {name}
      </h1>
      <div className="gradient //area w-full ">
        <div className="restaurant-info //visuals border border-[#d9dadb] bg-white shadow-md  rounded-3xl //mar-pad m-2.5 p-5 //responsive **start //area lg:m-2.5 lg:p-5 //mar-pad end** ">
          <div className="rating-price //layout flex justify-start items-center //visuals font-gilroy-bold text-[#02060ceb] text-base  gap-1 //responsive **start //area //mar-pad //visuals lg:text-base lg:gap-1 end**">
            <span>
              <i className="fa-regular fa-star //layout  inline-flex items-center justify-center text-xs w-5 h-5 text-white bg-green-700 rounded-full mb-1.5 "></i>
            </span>
            <span className="rating text-xs lg:text-base">
              {avgRating} ({totalRatingsString}){" "}
              <span className="dot text-[#8c8f91] text-sm">•</span>
            </span>
            <div className="price-for-two text-xs lg:text-base">
              {costForTwoMessage}
            </div>
          </div>

          <div className="cuisin font-gilroy-bold text-xs lg:text-sm text-[#b80000] underline p-1">
            <span>{cuisines.join(", ")}</span>
          </div>
          <div className="graphic-type-location w-full text-sm font-gilroy-medium flex justify-start items-center gap-2 mt-2">
            <div className="graphic flex flex-col justify-center items-center ">
              <div className="circle w-2 h-2 bg-[#c4c4c4] rounded-full"></div>
              <div className="line w-0.5 h-6 bg-[#c4c4c4]"></div>
              <div className="circle w-2 h-2 bg-[#c4c4c4] rounded-full"></div>
            </div>
            <div className="info flex flex-col gap-2.5">
              <div className="type-location">
                <span className="restaurant-type font-gilroy-bold text-xs lg:text-sm pr-2.5">
                  Outlet
                </span>
                <span className="location text-xs lg:text-sm ">{areaName}</span>
              </div>
              <div className="duration font-gilroy-bold text-xs lg:text-sm ">
                <span>{sla?.slaString?.toLowerCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenuHeader;
