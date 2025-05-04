import "./css/Shimmer.css";

function Shimmer() {
  return (
    <>
      <div className="Scard ml-5 mt-12 overflow-hidden h-[265px] w-[245px] flex flex-col items-start gap-1 rounded-2xl">
        <div className="Sbanner w-60 h-40 relative overflow-hidden rounded-2xl bg-[#bdbcbc]">
          <div className="Simg w-full h-full absolute rounded-2xl bg-[#bdbcbc]"></div>
        </div>
        <div className="Sinfo p-2 flex flex-col gap-2">
          <div className="Sname w-36 h-2 bg-[#dadada]"></div>
          <div className="Srating-duration h-2 w-24 bg-[#dadada]"></div>
          <div className="Scuisine w-56 h-2 bg-[#dadada]"></div>
          <div className="Slocation w-48 h-2 bg-[#dadada]"></div>
        </div>
      </div>
    </>
  );
}
export default Shimmer;
