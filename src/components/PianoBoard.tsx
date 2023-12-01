import { FC } from "react";

interface PianoBoardProps {}

const PianoBoard: FC<PianoBoardProps> = () => {
  return (
    <div className="w-full  aspect-[10/4] relative overflow-hidden">
      <div className="grid grid-cols-7 items-stretch w-full absolute h-full ">
        {Array(7)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className="  origin-top  bg-white w-full h-full border rounded-md hover:scale-95 duration-300"
            />
          ))}
      </div>
      <div className="grid grid-cols-7 h-[65%]   items-stretch w-full absolute  ">
        {Array(7)
          .fill(0)
          .map((item, index) =>
            index == 2 || index == 6 ? (
              <div key={index} className={`col-start-${index}`}></div>
            ) : (
              <div
                key={index}
                className={` origin-top  w-[80%] mx-auto hover:scale-95 duration-300 rounded-md  col-start-${index} col-span-1 translate-x-[50%] bg-black w-full h-full border`}
              />
            )
          )}
      </div>
    </div>
  );
};

export default PianoBoard;
