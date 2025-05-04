import "./css/Shimmer.css";

function Shimmer() {
  return (
    <>
      <div className="Scard mt-12 overflow-hidden w-full  flex flex-col items-start gap-1 rounded-2xl">
        <div className="Sbanner relative w-full aspect-[2/1.5] sm:aspect-[1.2/0.7] lg:aspect-[1.8/1.1]  overflow-hidden rounded-2xl bg-[#bdbcbc]">
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
