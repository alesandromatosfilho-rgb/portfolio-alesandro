import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.45}
          speed={2}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

function SpaceScene() {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.8} />
      </Canvas>
    </div>
  );
}

export default SpaceScene;