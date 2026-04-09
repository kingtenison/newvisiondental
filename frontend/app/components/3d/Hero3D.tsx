"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Environment, 
  Float,
  Sparkles,
  MeshDistortMaterial,
  PerspectiveCamera,
  Stars
} from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 128, 128]} />
        <MeshDistortMaterial
          color="#C5A059"
          distort={0.5}
          speed={2}
          metalness={0.9}
          roughness={0.1}
          emissive="#C5A059"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function FloatingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    if (ring2Ref.current) ring2Ref.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.y = state.clock.getElapsedTime() * 0.4;
  });
  
  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, 0]}>
        <torusGeometry args={[1.8, 0.05, 64, 200]} />
        <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} emissive="#C5A059" emissiveIntensity={0.2} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.05, 64, 200]} />
        <meshStandardMaterial color="#E5C78C" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh ref={ring3Ref} position={[0, 0, 0]}>
        <torusGeometry args={[2.6, 0.05, 64, 200]} />
        <meshStandardMaterial color="#A68A46" metalness={0.8} roughness={0.2} />
      </mesh>
    </>
  );
}

export function Hero3D() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return <div className="w-full h-full bg-gradient-to-br from-[#5C0F22] to-[#4A0C1A]" />;
  
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C5A059" />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="night" />
      
      <FloatingRings />
      <AnimatedSphere />
      
      <Sparkles count={800} scale={15} size={0.1} color="#C5A059" opacity={0.6} />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}
