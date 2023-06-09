import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const Raindrop = (props) => {
  var scene = new THREE.Scene();
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  var flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
  flash.position.set(200, 300, 100);
  scene.add(flash);
  useFrame((state, delta) => {
    if (Math.random() > 0.93 || flash.power > 100) {
      if (flash.power < 100)
        flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100);
      flash.power = 50 + Math.random() * 500;
    }
    if (ref.current.position.x < -0.55) {
      ref.current.position.x = 0;
    } else {
      ref.current.position.x -= delta / 7;
    }
    if (ref.current.position.y < -0.55) {
      ref.current.position.y = 0;
    } else {
      ref.current.position.y -= 0.01;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        /> */}
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const RainCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Raindrop />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default RainCanvas;
