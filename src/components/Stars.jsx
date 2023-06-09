import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
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
// let points = [];
// function animate() {
//   points.forEach((p) => {
//     p.velocity -= 0.1 + Math.random() * 0.1;
//     p.y += p.velocity;
//     if (p.y < -200) {
//       p.y = 200;
//       p.velocity = 0;
//     }
//   });
//   rainGeo.setFromPoints(points);
//   rainGeo.verticesNeedUpdate = true;
//   rain.rotation.y += 0.002;
//   if (Math.random() > 0.93 || flash.power > 100) {
//     if (flash.power < 100)
//       flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100);
//     flash.power = 50 + Math.random() * 500;
//   }
//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }
const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  useFrame((state, delta) => {
    ref.current.velocity -= 0.1 + Math.random() * 0.1;
    ref.current.position.y += ref.current.velocity;
    if (ref.current.position.y < -200) {
      ref.current.position.y = 200;
      ref.current.velocity = 0;
    }
    ref.current.rotation.y += 0.002;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [1.16, -0.12, 0.27] }} rotation={[0, 0, 1]}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
