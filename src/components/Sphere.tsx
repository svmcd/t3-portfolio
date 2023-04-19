import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import React, { useEffect, useRef, useState } from "react";

export const Sphere = ({ theme }: Record<string, unknown>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [noiseIntensity, setNoiseIntensity] = useState(0);
  const sphereColor = useMemo(
    () => new THREE.Color(theme === "light" ? "#FFFFFF" : "#1c1917"),
    [theme]
  );

  const [noiseIntensity, setNoiseIntensity] = useState(0);

  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //creating sphere
    const geometry = new THREE.SphereGeometry(1, 8, 8);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(sphereColor),
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    //sizes
    const sizes = {
      width: canvasRef.current?.clientWidth ?? 0,
      height: canvasRef.current?.clientHeight ?? 0,
    };

    //light
    const light = new THREE.PointLight(0xffffff, 2, 50);
    light.position.set(5, 5, 15);
    scene.add(light);

    //camera
    const camera = new THREE.PerspectiveCamera(
      40,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 1.5;
    scene.add(camera);

    //renderer
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);

    //postprocessing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const filmPass = new FilmPass(noiseIntensity);
    composer.addPass(filmPass);

    //animate
    const animate = () => {
      sphere.rotation.y += 0.0025; // manually rotate the sphere
      composer.render();
      requestAnimationFrame(animate);
    };

    animate();
  }, [sphereColor, noiseIntensity]);

  useEffect(() => {
    const newSphereColor =
      theme === "light"
        ? new THREE.Color("#FFFFFF")
        : new THREE.Color("#171717");
    const newNoiseIntensity = theme === "light" ? 0.15 : 20;
    setSphereColor(newSphereColor);
    setNoiseIntensity(newNoiseIntensity);
  }, [theme]);

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
