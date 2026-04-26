import { Float, MeshDistortMaterial } from "@react-three/drei";

function FloatingOrb() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh>
        <icosahedronGeometry args={[1.4, 8]} />
        <MeshDistortMaterial
          color="#60a5fa"
          distort={0.3}
          speed={2}
          roughness={0.08}
          metalness={0.65}
        />
      </mesh>
    </Float>
  );
}

export default FloatingOrb;