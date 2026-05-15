import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Stars,
  MeshDistortMaterial,
  Environment,
} from "@react-three/drei";

function CorePlanet() {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.25;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.38;
  });

  return (
    <Float speed={2.3} rotationIntensity={1.1} floatIntensity={1.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.25, 6]} />
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.35}
          speed={2}
          roughness={0.2}
          metalness={0.45}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ scale, rotation, color }) {
  const ringRef = useRef(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.28;
  });

  return (
    <mesh ref={ringRef} scale={scale} rotation={rotation}>
      <torusGeometry args={[1.55, 0.015, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
    </mesh>
  );
}

function FloatingCube({ position, color }) {
  const cubeRef = useRef(null);

  useFrame((state) => {
    if (!cubeRef.current) return;
    cubeRef.current.rotation.x = state.clock.elapsedTime * 0.7;
    cubeRef.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.32, 0.32, 0.32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} />
      </mesh>
    </Float>
  );
}

function Advanced3DScene() {
  return (
    <div className="scene-card">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 4, 5]} intensity={2.4} color="#a78bfa" />
        <pointLight position={[-4, -2, 3]} intensity={1.6} color="#2563eb" />

        <Stars radius={80} depth={55} count={2200} factor={4} saturation={0} fade speed={1} />

        <CorePlanet />
        <OrbitRing scale={1} rotation={[0.6, 0.2, 0.3]} color="#a78bfa" />
        <OrbitRing scale={1.18} rotation={[1.2, 0.7, 0.9]} color="#2563eb" />

        <FloatingCube position={[-2.05, 1.25, 0]} color="#8b5cf6" />
        <FloatingCube position={[2.1, -1.15, 0.2]} color="#38bdf8" />
        <FloatingCube position={[1.85, 1.45, -0.2]} color="#c084fc" />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.4} />
      </Canvas>

      <div className="scene-label">
        <span>React</span>
        <span>3D</span>
        <span>Cloud</span>
      </div>
    </div>
  );
}

export default Advanced3DScene;
