import { url } from "../utils/Constant";
import "./css/RestaurantMenuCard.css";
function RestaurantMenuCard({
  id,
  category,
  isVeg,
  name,
  price,
  defaultPrice,
  description,
  imageId,
  inStock,
  addons,
}) {
  let IMG_URL;
  if (imageId !== undefined) {
    IMG_URL = url + imageId;
  } else {
    IMG_URL = null;
  }

  return (
    <>
      <div
        className="item-card //area w-full min-h-[20vh]  //layout flex justify-between items-center //visuals  p-4 
       //responsive **start //area lg:w-full lg:min-h-[40] //mar-pad lg:p-4 end**"
      >
        <div className="item-info //layout flex flex-col //area max-w-[50%] //visuals pr-2 gap-1 //responsive **start //area lg:w-[70%]  //mar-pad end**">
          <h3 className="item-name //visuals font-gilroy-bold text-base lg:text-lg">
            {name}
          </h3>
          <h3 className="item-price //visuals font-gilroy-medium text-base">
            ₹{price / 100 || defaultPrice / 100}
          </h3>
          <p className="item-desc //area max-h-12 //visuals font-gilroy-light mt-1  text-ellipsis text-xs overflow-hidden //responsive **start //area lg:max-h-12 //mar-pad lg:mt-1 end**">
            {description}
          </p>
        </div>
        <div className="item-image //area min-w-36 max-h-40  //visuals relative  //responsive **start //area lg:max-w-40 lg:max-h-36  //mar-pad end**">
          <img
            className=" //area h-32 w-32  //visuals  object-cover object-center rounded-2xl //responsive **start //area lg:w-40 lg:h-36 //mar-pad end**"
            style={{
              height: IMG_URL ? "" : "0px",
            }}
            src={IMG_URL}
            alt=""
          />
          <button className="add-item //area w-24 h-10 //visuals absolute left-[12%] bottom-[-15px] font-gilroy-bold  text-base  px-5 py-2 outline-none rounded-md cursor-pointer uppercase border-2 border-[#d9dadb] bg-white text-[#4caf50] z-10 //responsive **start //area lg:w-28 lg:h-10   //mar-pad lg:px-10 lg:py-2 //visuals lg:left-[14%] lg:bottom-[-15px] lg:text-base end**">
            ADD
          </button>
        </div>
      </div>
      <div className=" horizontal-rule "></div>
    </>
  );
}
export default RestaurantMenuCard;
