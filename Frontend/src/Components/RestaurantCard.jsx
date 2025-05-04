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
    "offer absolute left-0 bottom-0 text-start pt-0 pr-3 pb-2 pl-3 text-[rgba(255,255,255,0.92)]  text-xl leading-6 tracking-[-0.5px] font-extrabold  text-nowrap overflow-hidden text-ellipsis uppercase font-proxima-nova";

  return (
    <>
      <div
        className="card text-[#02060ceb] m-3 overflow-hidden h-72 w-60 flex flex-col items-start gap-1 cursor-pointer border-none"
        onClick={handleMenu}
      >
        <div className="banner w-60 h-40 relative overflow-hidden rounded-2xl ">
          <img
            src={IMG_URL}
            style={{ height: url + cloudinaryImageId ? "" : "0px" }}
            alt=""
            className="w-full h-full object-cover object-center "
          />
          <div className="offer-textbox absolute left-0 bottom-0 w-full h-2/5">
            {hasDiscountInfo ? (
              <span className={`${offer}`}>
                {`${aggregatedDiscountInfoV3?.header}  
              ${aggregatedDiscountInfoV3?.subHeader}`}
              </span>
            ) : (
              <span className={`${offer}`}>
                {aggregatedDiscountInfoV3?.header ?? ""}
              </span>
            )}
          </div>
        </div>
        <div className="info p-3">
          <div className="name font-gilroy-bold text-lg w-56 whitespace-nowrap overflow-hidden text-ellipsis">
            <span>{name}</span>
          </div>
          <div className="rating-duration font-gilroy-medium flex justify-start items-center gap-1">
            <span>
              <i className="fa-regular fa-star inline-flex items-center justify-center text-sm w-4 h-4 text-white bg-green-600 rounded-full mb-1"></i>
            </span>
            <span>{avgRating} • </span>
            <span>{sla?.slaString} </span>
          </div>

          <div className="cuisine text-[#02060c99] font-gilroy-medium h-5 w-56 whitespace-nowrap overflow-hidden text-ellipsis">
            <span>{cuisines.join(", ")}</span>
          </div>
          <div className="location  text-[#02060c99] font-gilroy-medium h-5 w-48 whitespace-nowrap overflow-hidden text-ellipsis">
            <span>{areaName}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default RestrauntCards;
