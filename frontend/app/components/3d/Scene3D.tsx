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
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";

// Rotating 3D Tooth Model
function RotatingTooth({ color = "#C5A059", position = [0, 0, 0] as [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });
  
  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <MeshDistortMaterial
            color={color}
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.6, 0.2, 0.4]}>
          <coneGeometry args={[0.3, 0.8, 32]} />
          <MeshDistortMaterial
            color={color}
            distort={0.3}
            speed={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Floating Gold Particles with stable positions
function FloatingGoldParticles() {
  const [particles, setParticles] = useState<THREE.BufferGeometry | null>(null);
  
  useEffect(() => {
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    setParticles(geometry);
  }, []);
  
  if (!particles) return null;
  
  return (
    <points geometry={particles}>
      <pointsMaterial color="#C5A059" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

// Animated Gold Ring
function GoldRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
      ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.2, 0.08, 64, 200]} />
      <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.1} emissive="#C5A059" emissiveIntensity={0.3} />
    </mesh>
  );
}

// Service Card 3D Component
export function ServiceCard3D({ service, index }: { service: any; index: number }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C5A059]/20 h-full">
        <div className="h-48 bg-gray-800" />
        <div className="p-6">
          <div className="h-6 bg-gray-700 rounded mb-2" />
          <div className="h-4 bg-gray-700 rounded mb-4" />
          <div className="h-10 bg-gray-700 rounded" />
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -10 }}
      className="relative h-full cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/20 to-[#A68A46]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/30 h-full">
        <div className="relative h-56 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={service.image}
              alt={service.name}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* 3D Icon */}
          <div className="absolute top-4 right-4 w-12 h-12">
            <Canvas camera={{ position: [0, 0, 2] }} style={{ background: "transparent" }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[2, 2, 2]} />
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                  <sphereGeometry args={[0.5, 32, 32]} />
                  <MeshDistortMaterial
                    color="#C5A059"
                    distort={0.3}
                    speed={2}
                    metalness={0.9}
                    roughness={0.1}
                  />
                </mesh>
              </Float>
            </Canvas>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{service.duration}</span>
            </div>
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center text-[#C5A059] font-semibold hover:translate-x-1 transition-transform"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Hero 3D Scene
export function Hero3DScene() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return <div className="w-full h-full bg-gradient-to-br from-[#5C0F22] to-[#4A0C1A]" />;
  
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: "transparent" }}
      className="w-full h-full"
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C5A059" />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="city" />
      
      <FloatingGoldParticles />
      <GoldRing />
      <RotatingTooth position={[-1.5, 0, 0]} />
      <RotatingTooth position={[1.5, 0.5, 0]} color="#E5C78C" />
      
      <Sparkles count={500} scale={10} size={0.1} color="#C5A059" />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
