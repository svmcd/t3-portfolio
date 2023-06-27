import { useMousePosition } from "@component/hooks/useMousePosition";

export const CustomCursor = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div
      className="fixed top-0 bottom-0 left-0 z-[21] h-6 w-6 rounded-full bg-white mix-blend-difference"
      style={{
        left: clientX,
        top: clientY,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};
