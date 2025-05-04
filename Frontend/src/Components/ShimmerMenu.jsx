function ShimmerMenu() {
  return (
    <div className="SMcontainer min-w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="SMbox  flex flex-col pt-28 justify-start items-center gap-9 w-1/2 h-screen relative">
        <div className="SMheading w-full h-9 pl-2">
          <span className="bg-[#bdbcbc] w-40 h-6 block rounded-md"></span>
        </div>

        <div className="SMbanner relative bg-[#bdbcbc] rounded-2xl overflow-hidden h-44 w-full flex flex-col gap-4 pl-5 pt-5 ">
          <span className=" bg-[#dadada] w-48 h-3"></span>
          <span className=" bg-[#dadada] w-12 h-2"></span>
          <span className=" bg-[#dadada] w-28 h-2"></span>
          <span className=" bg-[#dadada] w-20 h-2"></span>
        </div>

        <div className="font-mono">-Menu-</div>
        <div className=" w-full h-10 rounded-lg bg-[#dadada]"></div>
        <div className="SMmenucard relative  h-44 w-full bg-[#bdbcbc] mt-4 rounded-2xl flex justify-between items-center px-5">
          <div className="flex flex-col gap-4 w-10/12">
            <span className="w-40 h-4 bg-[#dadada] rounded-sm"></span>
            <span className="w-14 h-4 bg-[#dadada] rounded-sm"></span>
            <span className="w-9/12 h-4 bg-[#dadada] rounded-sm"></span>
            <span className="w-1/2 h-4 bg-[#dadada] rounded-sm"></span>
          </div>
          <div className="w-36 h-36 rounded-lg bg-[#dadada]"></div>
        </div>
      </div>
    </div>
  );
}
export default ShimmerMenu;
