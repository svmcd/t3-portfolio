import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
} from "react";

export const Sphere = ({ theme }: Record<string, unknown>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [noiseIntensity, setNoiseIntensity] = useState(0);
  const sphereColor = useMemo(
    () => new THREE.Color(theme === "light" ? "#FFFFFF" : "#1c1917"),
    [theme]
  );

  useLayoutEffect(() => {
    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(1, 8, 8);
    const material = new THREE.MeshStandardMaterial({ color: sphereColor });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const sizes = {
      width: canvas.clientWidth,
      height: canvas.clientHeight,
    };

    const light = new THREE.PointLight(0xffffff, 2, 50);
    light.position.set(5, 5, 15);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(
      40,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 1.5;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const filmPass = new FilmPass(noiseIntensity);
    composer.addPass(filmPass);

    const animate = () => {
      sphere.rotation.y += 0.0025; // Manually rotate the sphere
      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    // Clean up
    return () => {
      composer.dispose();
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, [sphereColor, noiseIntensity]);

  useEffect(() => {
    const newNoiseIntensity = theme === "light" ? 0.15 : 20;
    if (newNoiseIntensity !== noiseIntensity) {
      setNoiseIntensity(newNoiseIntensity);
    }
  }, [theme, noiseIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        color: sphereColor.getStyle(),
      }}
    ></canvas>
  );
};
