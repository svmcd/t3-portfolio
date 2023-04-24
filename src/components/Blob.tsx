import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils, Clock } from "three";
import type { Mesh, BufferGeometry, Material } from "three";
import { vertexShader } from "@component/shaders/vertexShader";
import { fragmentShader } from "@component/shaders/fragmentShader";

export const Blob = React.memo(() => {
  const mesh = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null);
  const clockRef = useRef(new Clock());
  const lerp = useMemo(() => MathUtils.lerp, []);
  const uniformsRef = useRef({
    u_time: { value: 0 },
    u_intensity: { value: 1 },
  });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useFrame((state) => {
    const currentMesh = mesh.current;
    const uniforms = uniformsRef.current;
    const clock = clockRef.current;

    if (currentMesh) {
      uniforms.u_time.value = 0.15 * clock.getElapsedTime();
      uniforms.u_intensity.value = lerp(uniforms.u_intensity.value, 0.5, 0.02);
    }

    const { camera } = state;
    camera.position.x = lerp(camera.position.x, (mouse.x - 0.5) * 0.75, 0.1);
    camera.position.y = lerp(camera.position.y, -(mouse.y - 0.5) * 0.75, 0.1);
  });

  return (
    <mesh ref={mesh} scale={1} position={[0, 0, 0]}>
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
      />
    </mesh>
  );
});

Blob.displayName = "Blob";
