import "./css/RestaurantCard.css";
import { url } from "../utils/Constant";
import { useNavigate } from "react-router-dom";

function RestrauntCards({
  id,
  cloudinaryImageId,
  name,
  avgRating,
  sla,
  cuisines,
  areaName,
  aggregatedDiscountInfoV3,
}) {
  const hasDiscountInfo =
    aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.subHeader;

  const navigate = useNavigate();
  const handleMenu = () => {
    const joinedName = name.split(" ").join("-");
    const url = `/restaurant/${joinedName}/${id}/menu`;
    navigate(url);
  };

  let IMG_URL;
  if (cloudinaryImageId !== undefined) {
    IMG_URL = url + cloudinaryImageId;
  } else {
    IMG_URL = null;
  }

  //tailwind css custom classes
  const offer =
    "offer absolute left-0 bottom-0 text-start pt-0 pr-3 pb-2 pl-3 text-[rgba(255,255,255,0.92)]  text-sm sm:text-base lg:txt-lg leading-6 tracking-[-0.5px] font-extrabold  text-nowrap overflow-hidden text-ellipsis uppercase font-proxima-nova";

  return (
    <>
      <div
        className="card mt-4  flex flex-col items-center  cursor-pointer border-none   max-w-xs transition-transform hover:scale-[1.02]"
        onClick={handleMenu}
      >
        {/* Image Banner */}
        <div className="relative w-full aspect-[2/1.5] sm:aspect-[1.2/0.7] lg:aspect-[1.8/1.1]  overflow-hidden rounded-2xl">
          <img
            src={IMG_URL}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
          <div className="offer-textbox absolute left-0 bottom-0 w-full h-2/5 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-0">
            {hasDiscountInfo ? (
              <span className={`${offer}`}>
                {`${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}
              </span>
            ) : (
              <span className={`${offer}`}>
                {aggregatedDiscountInfoV3?.header ?? ""}
              </span>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="info px-2 flex flex-col gap-1 w-full min-w-0">
          <div className="name font-gilroy-bold text-lg truncate w-full">
            <span>{name}</span>
          </div>

          <div className="rating-duration font-gilroy-medium flex items-center gap-1 text-sm">
            <i className="fa-regular fa-star inline-flex items-center justify-center text-xs w-4 h-4 text-white bg-green-600 rounded-full"></i>
            <span>
              {avgRating} • {sla?.slaString}
            </span>
          </div>

          <div className="cuisine text-[#02060c99] font-gilroy-medium text-sm truncate w-full">
            <span>{cuisines.join(", ")}</span>
          </div>

          <div className="location text-[#02060c99] font-gilroy-medium text-sm truncate w-full">
            <span>{areaName}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default RestrauntCards;
