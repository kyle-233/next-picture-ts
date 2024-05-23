// https://juejin.cn/post/7298220509127884827?searchId=202405201642048E705C24A5270057F515
"use client";
import { useEffect } from "react";
import * as THREE from "three";
import styles from "./StarBackground.module.css";
let camear: any;
let scene: any;
let material: any;
let renderer: any;
let mouseX = 0;
let mouseY = 0;
export const StarBackground = () => {
  useEffect(() => {
    const init = () => {
      camear = new THREE.PerspectiveCamera();
      camear.position.z = 500;
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000ff, 0.001);
      const geometry = new THREE.BufferGeometry();
      let vertices = [];
      const size = 2000;
      for (let i = 0; i < 20000; i++) {
        const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        vertices.push(x, y, z);
      }
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      material = new THREE.PointsMaterial({
        size: 2,
        color: 0xffffff,
      });
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      renderer = new THREE.WebGLRenderer();
      const { devicePixelRatio, innerHeight, innerWidth } = window;
      renderer.setPixelRatio(devicePixelRatio);
      renderer.setSize(innerWidth, innerHeight);
      renderer.render(scene, camear);
      const containerDom = document.getElementById("container");
      if (containerDom?.hasChildNodes()) {
        while (containerDom.firstChild) {
          containerDom.removeChild(containerDom.firstChild);
        }
      }
      containerDom?.appendChild(renderer.domElement);
      containerDom?.addEventListener("pointermove", onPointerMove);
    };
    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };
    init();
    animate();
  }, []);

  useEffect(() => {
    const resetListener = () => {
      const { devicePixelRatio, innerHeight, innerWidth } = window;
      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(devicePixelRatio);
    }
    window.addEventListener('resize', resetListener)
    return () => {
      window.removeEventListener('resize', resetListener)
    }
  }, [])

  const onPointerMove = (event: any) => {
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
  };

  const render = () => {
    camear.position.x += (mouseX * 2 - camear.position.x) * 0.02;
    camear.position.y += (-mouseY * 2 - camear.position.y) * 0.02;
    camear.lookAt(scene.position);
    renderer.render(scene, camear);
    scene.rotation.x += 0.001;
    scene.rotation.y += 0.002;
  };
  return <div className={styles.container} id="container"></div>;
};
