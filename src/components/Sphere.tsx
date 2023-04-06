import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import React, { useEffect, useRef, useState } from "react";

export const Sphere: React.FC = ({ theme }: Record<string, unknown>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sphereColor, setSphereColor] = useState("");

  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //creating sphere
    const geometry = new THREE.SphereGeometry(1, 8, 8);
    const material = new THREE.MeshStandardMaterial({ color: sphereColor });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    //sizes
    const sizes = {
      width: canvasRef.current.clientWidth,
      height: canvasRef.current.clientHeight,
    };

    //light
    const light = new THREE.PointLight(0xffffff, 2, 50);
    light.position.set(5, 15, 15);
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
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // set alpha to true
    renderer.setSize(sizes.width, sizes.height);

    //postprocessing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const filmPass = new FilmPass(
      0.5, // noise intensity
      0, // scanline intensity
      0, // scanline count
      0 // grayscale
    );
    composer.addPass(filmPass);

    //controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0;

    //animate
    const animate = () => {
      sphere.rotation.y += 0.0025; // manually rotate the sphere
      controls.update();
      composer.render();
      requestAnimationFrame(animate);
    };

    animate();
  }, [sphereColor]);

  useEffect(() => {
    const newSphereColor = theme === "light" ? "#FFFFFF" : "#171717";
    setSphereColor(newSphereColor);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    ></canvas>
  );
};
