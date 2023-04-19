import { useMousePosition } from "@component/hooks/useMousePosition";

export const CustomCursor = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[1] mix-blend-difference">
      <svg
        width={75}
        height={75}
        viewBox="0 0 50 50"
        className="absolute fill-white"
        style={{
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};
