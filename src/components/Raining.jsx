import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { render } from "react-dom";
import * as THREE from "three";
let scene,
  camera,
  renderer,
  cloudParticles = [],
  flash,
  rain,
  rainGeo,
  ambient,
  directionalLight,
  rainCount = 35000;
let points = [];
const Raining = () => {
  const mountRef = useRef();

  useEffect(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;
    window.addEventListener("resize", onWindowResize, false);
    ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);

    directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
    flash.position.set(200, 300, 100);
    scene.add(flash);
    let loader = new THREE.TextureLoader();
    loader.load("src/assets/smoke.png", function (texture) {
      let cloudGeo = new THREE.PlaneGeometry(500, 500);
      let cloudMaterial = new THREE.MeshLambertMaterial({
        alphaMap: texture,
        transparent: true,
      });

      for (let p = 0; p < 25; p++) {
        let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
        cloud.position.set(
          Math.random() * 800 - 400,
          500,
          Math.random() * 500 - 450
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.15;
        cloud.rotation.z = Math.random() * 360;
        cloud.material.opacity = 0.6;
        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    });
    renderer = new THREE.WebGLRenderer();
    scene.fog = new THREE.FogExp2(0x11111f, 0.002);
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    rainGeo = new THREE.BufferGeometry();

    for (let i = 0; i < rainCount; i++) {
      let rainDrop = new THREE.Vector3(
        Math.random() * 400 - 200,
        Math.random() * 500 - 250,
        Math.random() * 400 - 200
      );
      rainDrop.velocity = {};
      rainDrop.velocity = 0;
      points.push(rainDrop);
    }
    rainGeo.setFromPoints(points);
    let rainMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.1,
      transparent: true,
    });
    rain = new THREE.Points(rainGeo, rainMaterial);
    scene.add(rain);
    animate();
    mountRef.current.appendChild(renderer.domElement);

    function animate() {
      cloudParticles.forEach((p) => {
        p.rotation.z -= 0.002;
      });
      points.forEach((p) => {
        p.velocity -= 0.1 + Math.random() * 0.1;
        p.y += p.velocity;
        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      });
      rainGeo.setFromPoints(points);
      rainGeo.verticesNeedUpdate = true;
      rain.rotation.y += 0.002;
      if (Math.random() > 0.93 || flash.power > 100) {
        if (flash.power < 100)
          flash.position.set(
            Math.random() * 400,
            300 + Math.random() * 200,
            100
          );
        flash.power = 50 + Math.random() * 500;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);
  return <div ref={mountRef}></div>;
};

export default Raining;
