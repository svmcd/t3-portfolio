export const Frame = () => {
  return (
    <div className="bg-red pointer-events-none absolute z-40 h-full w-full bg-transparent ">
      <div className="bg-white-500 bg-opacity-15 absolute top-0 h-[1.4rem] w-full bg-clip-padding backdrop-blur-sm backdrop-filter md:h-8"></div>
      <div className="bg-white-500 bg-opacity-15 absolute bottom-0 h-[1.4rem] w-full bg-clip-padding backdrop-blur-sm backdrop-filter md:h-8"></div>
      <div className="bg-white-500 bg-opacity-15 absolute left-0 h-full w-[1.4rem] bg-clip-padding backdrop-blur-sm backdrop-filter md:w-8"></div>
      <div className="bg-white-500 bg-opacity-15 absolute right-0 h-full w-[1.4rem] bg-clip-padding backdrop-blur-sm backdrop-filter md:w-8"></div>
    </div>
  );
};
