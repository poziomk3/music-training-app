import { FC } from "react";
import Triangle from "./Triangle";

interface CircleOfFifthsProps {}
interface Note {
  name: string;
  color: string;
}
const cirlceOfFifths: Array<Note> = [
  { name: "C", color: "#6A0DAD" },
  { name: "G", color: "#5D0C9E" },
  { name: "D", color: "#500B8F" },
  { name: "A", color: "#430A80" },
  { name: "E", color: "#360970" },
  { name: "B", color: "#290861" },
  { name: "F#", color: "#1C0752" },
  { name: "C#", color: "#0F0643" },
  { name: "G#", color: "#020534" },
  { name: "D#", color: "#000425" },
  { name: "A#", color: "#000316" },
  { name: "F", color: "#000207" },
];

const CircleOfFifths: FC<CircleOfFifthsProps> = () => {
  return (
    <div className="relative  w-full  aspect-square  flex justify-center items-center overflow-hidden">
      <div className="absolute ">
          {cirlceOfFifths.map((item, index) => (
            <div
              key={index}
              style={{
                transformOrigin: "bottom",
                top: 0,
                left: 0,
                transform: `translate(-50%,-100%) rotate(${5 + index * 30}deg)  `,
                transitionDuration: "300ms",
              }}
              className="absolute   w-[100px] z-[1]   "
            >
              <div className="hover:scale-95  duration-300  w-[100px] aspect-square z-[20] relative  ">
                <div
                  style={{
                    transformOrigin: "center",
                    transform: `translate(50%,50%) rotate(-${5 + index * 30}deg) `,
                  }}
                  className="cursor-pointer absolute z-20 text-white right-1/2 text-[2rem] font-bold"
                >
                  {item.name}
                </div>
                <Triangle fillColor={item.color} />
              </div>
            </div>
          ))}
          <div className="  absolute w-[220px] -translate-x-1/2 -translate-y-1/2 aspect-square opacity-80 bg-[#1C0752] rounded-full z-20  " />
      </div>
    </div>
  );
};

export default CircleOfFifths;
