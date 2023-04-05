import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect, useRef } from "react";

const Sphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //creating sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color: "#78716c" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    //light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(25, 10, 15);
    scene.add(light);

    //camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 10;
    scene.add(camera);

    //renderer
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // set alpha to true
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 0); // set background color to black with alpha 0
    renderer.render(scene, camera);

    //controls
    const controls = new OrbitControls(camera, canvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute"
      style={{ width: "100%", height: "100%", background: "transparent" }} // set canvas background to transparent
    ></canvas>
  );
};

export default Sphere;
