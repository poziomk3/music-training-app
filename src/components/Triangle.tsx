import { FC } from "react";

interface TrianglePrFC {
  fillColor?: string;
}

const Triangle: FC<TrianglePrFC> = ({ fillColor }) => {
  return (
    <svg width="100%" viewBox="0 0 200 373" fill={fillColor}>
      <polygon points="100,373 200,0  0,0 " />
    </svg>
  );
};

export default Triangle;
