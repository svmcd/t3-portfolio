export const Frame = () => {
  return (
    <div className="bg-red pointer-events-none absolute z-40 h-full w-full bg-transparent ">
      <div className="bg-white-500 absolute top-0 h-8 w-full bg-opacity-30 bg-clip-padding backdrop-blur-xl backdrop-filter"></div>
      <div className="bg-white-500 absolute bottom-0 h-8 w-full bg-opacity-30 bg-clip-padding backdrop-blur-xl backdrop-filter"></div>
      <div className="bg-white-500 absolute left-0 h-full w-8 bg-opacity-30 bg-clip-padding backdrop-blur-xl backdrop-filter"></div>
      <div className="bg-white-500 absolute right-0 h-full w-8 bg-opacity-30 bg-clip-padding backdrop-blur-xl backdrop-filter"></div>
    </div>
  );
};
