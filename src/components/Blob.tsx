import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils, Clock } from "three";
import { vertexShader } from "@component/shaders/vertexShader";
import { fragmentShader } from "@component/shaders/fragmentShader";

export const Blob = React.memo(() => {
  const mesh = useRef();
  const clockRef = useRef(new Clock());
  const lerp = useMemo(() => MathUtils.lerp, []);
  const uniformsRef = useRef({
    u_time: { value: 0 },
    u_intensity: { value: 0.3 },
  });

  useFrame(() => {
    const currentMesh = mesh.current;
    const uniforms = uniformsRef.current;
    const clock = clockRef.current;

    if (currentMesh) {
      uniforms.u_time.value = 0.4 * clock.getElapsedTime();
      uniforms.u_intensity.value = lerp(uniforms.u_intensity.value, 0.05, 0.02);
    }
  });

  return (
    <mesh ref={mesh} scale={1} position={[0, 0, 0]}>
      <icosahedronBufferGeometry args={[2, 10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
      />
    </mesh>
  );
});

Blob.displayName = "Blob";
