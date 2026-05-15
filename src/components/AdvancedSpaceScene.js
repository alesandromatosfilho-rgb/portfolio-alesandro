import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Stars,
  MeshDistortMaterial,
  Text,
  Sparkles,
} from "@react-three/drei";

function CodePlanet() {
  const groupRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.35;
    groupRef.current.rotation.x = Math.sin(time * 0.45) * 0.12;
    ringRef.current.rotation.z = time * 0.55;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.7} floatIntensity={1.8}>
        <mesh>
          <sphereGeometry args={[1.22, 80, 80]} />
          <MeshDistortMaterial
            color="#7c3aed"
            distort={0.36}
            speed={2.4}
            roughness={0.12}
            metalness={0.25}
          />
        </mesh>

        <mesh ref={ringRef} rotation={[1.25, 0.2, 0]}>
          <torusGeometry args={[1.82, 0.025, 16, 140]} />
          <meshStandardMaterial color="#60a5fa" emissive="#2563eb" emissiveIntensity={0.8} />
        </mesh>

        <Text
          position={[-1.3, 1.65, 0]}
          fontSize={0.22}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          React
        </Text>

        <Text
          position={[1.45, -1.45, 0]}
          fontSize={0.22}
          color="#c4b5fd"
          anchorX="center"
          anchorY="middle"
        >
          Cloud
        </Text>
      </Float>
    </group>
  );
}

function AdvancedSpaceScene() {
  return (
    <div className="scene-card">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 50 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[4, 3, 4]} intensity={2.6} color="#a78bfa" />
        <pointLight position={[-3, -2, 3]} intensity={1.5} color="#2563eb" />
        <Stars radius={85} depth={42} count={2800} factor={4} fade speed={1.1} />
        <Sparkles count={80} scale={6} size={2.8} speed={0.45} color="#a78bfa" />
        <CodePlanet />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.1} />
      </Canvas>
    </div>
  );
}

export default AdvancedSpaceScene;
