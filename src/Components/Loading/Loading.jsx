import { MutatingDots } from "react-loader-spinner";

function Loading({ width, height, color, secondColor }) {
  return (
    <MutatingDots
      height={width}
      width={height}
      color={color}
      secondaryColor={secondColor}
      ariaLabel="loading"
      radius={12}
    />
  );
}

export default Loading;
