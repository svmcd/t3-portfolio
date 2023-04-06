import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import React, { useEffect, useRef } from "react";

export const Sphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //creating sphere
    const geometry = new THREE.SphereGeometry(1.5, 10, 10);
    const material = new THREE.MeshLambertMaterial({ color: "white" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //sizes
    const sizes = {
      width: canvasRef.current.clientWidth,
      height: canvasRef.current.clientHeight,
    };

    //light
    const light = new THREE.PointLight(0xffffff, 1, 50);
    light.position.set(5, 25, 15);
    scene.add(light);

    //camera
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 2.5;
    scene.add(camera);

    //renderer
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // set alpha to true
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 0); // set background color to black with alpha 0

    //postprocessing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const filmPass = new FilmPass(
      10, // noise intensity
      0, // scanline intensity
      0, // scanline count
      false // grayscale
    );
    composer.addPass(filmPass);

    //controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 2.5;

    //mousemove event listener
    let mouse = { x: 0, y: 0 };
    canvas.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / sizes.width) * 2 - 1;
      mouse.y = -(event.clientY / sizes.height) * 2 + 1;
    });

    //animate
    const animate = () => {
      setTimeout(() => {
        //update camera position based on mouse movement
        camera.position.x = mouse.x * 0.25;
        camera.position.y = mouse.y * 0.25;
        camera.lookAt(mesh.position);

        controls.update();
        composer.render();
        requestAnimationFrame(animate);
      }, 1000 / 10);
    };

    animate();
  }, []);

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
