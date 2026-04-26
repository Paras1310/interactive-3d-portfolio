import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingOrb from "./FloatingOrb";
import SceneLights from "./SceneLights";

function HeroScene() {
  return (
    <div className="h-[250px] w-full sm:h-[340px] md:h-[400px] lg:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <SceneLights />
        <FloatingOrb />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
}

export default HeroScene;