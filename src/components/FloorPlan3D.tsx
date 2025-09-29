import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Animated path component
const AnimatedPath = ({ points, color, delay = 0 }: { points: [number, number, number][]; color: string; delay?: number }) => {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      const time = state.clock.getElapsedTime();
      const opacity = Math.sin(time * 2 + delay) * 0.3 + 0.7;
      materialRef.current.opacity = opacity;
    }
  });

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  }, [points]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 50, 0.05, 8, false]} />
      <meshBasicMaterial ref={materialRef} color={color} transparent opacity={0.8} />
    </mesh>
  );
};

// Glowing marker component
const Marker = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (glowRef.current) {
      const scale = 1 + Math.sin(time * 3) * 0.2;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {/* Core marker */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

// Room/building block component
const Room = ({ 
  position, 
  size, 
  height = 0.2 
}: { 
  position: [number, number, number]; 
  size: [number, number]; 
  height?: number;
}) => {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[size[0], height, size[1]]} />
      <meshStandardMaterial color="#e8dcc8" roughness={0.8} metalness={0.1} />
    </mesh>
  );
};

// Wall component
const Wall = ({ 
  position, 
  size, 
  rotation = [0, 0, 0] 
}: { 
  position: [number, number, number]; 
  size: [number, number, number];
  rotation?: [number, number, number];
}) => {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#d4c5b0" roughness={0.9} />
    </mesh>
  );
};

// Main scene component
const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  // Define path routes
  const paths = [
    {
      points: [
        [-6, 0.3, 6] as [number, number, number],
        [-3, 0.3, 4] as [number, number, number],
        [0, 0.3, 3] as [number, number, number],
        [3, 0.3, 2] as [number, number, number],
        [5, 0.3, -1] as [number, number, number],
      ],
      color: '#60d5ff',
      delay: 0
    },
    {
      points: [
        [-5, 0.3, -6] as [number, number, number],
        [-2, 0.3, -3] as [number, number, number],
        [1, 0.3, -1] as [number, number, number],
        [4, 0.3, 1] as [number, number, number],
      ],
      color: '#a78bfa',
      delay: 1
    },
    {
      points: [
        [6, 0.3, 5] as [number, number, number],
        [3, 0.3, 3] as [number, number, number],
        [0, 0.3, 0] as [number, number, number],
        [-3, 0.3, -2] as [number, number, number],
      ],
      color: '#60d5ff',
      delay: 2
    }
  ];

  return (
    <group ref={groupRef}>
      {/* Ambient light */}
      <ambientLight intensity={0.6} />
      
      {/* Directional lights */}
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <directionalLight position={[-10, 10, -5]} intensity={0.4} />

      {/* Floor base */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[20, 0.5, 20]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.9} />
      </mesh>

      {/* Building rooms */}
      <Room position={[-4, 0.1, 4]} size={[3, 3]} />
      <Room position={[2, 0.1, 3]} size={[4, 3]} />
      <Room position={[-3, 0.1, -2]} size={[3, 4]} />
      <Room position={[4, 0.1, -2]} size={[3.5, 4]} />
      <Room position={[0, 0.1, 0]} size={[2, 2]} />
      <Room position={[-5, 0.1, -5]} size={[2.5, 2]} />
      <Room position={[5, 0.1, 4]} size={[2, 2.5]} />

      {/* Walls */}
      <Wall position={[-4, 0.5, 2]} size={[3, 0.8, 0.1]} />
      <Wall position={[2, 0.5, 1.5]} size={[4, 0.8, 0.1]} />
      <Wall position={[-3, 0.5, -4]} size={[3, 0.8, 0.1]} />
      <Wall position={[-1.5, 0.5, 0]} size={[0.1, 0.8, 2]} rotation={[0, 0, 0]} />
      <Wall position={[1, 0.5, -1]} size={[0.1, 0.8, 2]} rotation={[0, 0, 0]} />

      {/* Animated paths */}
      {paths.map((path, index) => (
        <AnimatedPath key={index} {...path} />
      ))}

      {/* Markers */}
      <Marker position={[-6, 0.3, 6]} color="#60d5ff" />
      <Marker position={[5, 0.3, -1]} color="#60d5ff" />
      <Marker position={[-5, 0.3, -6]} color="#a78bfa" />
      <Marker position={[4, 0.3, 1]} color="#a78bfa" />
      <Marker position={[6, 0.3, 5]} color="#60d5ff" />
      <Marker position={[-3, 0.3, -2]} color="#60d5ff" />
    </group>
  );
};

export const FloorPlan3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[12, 12, 12]} fov={50} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
        />
        <Scene />
        <fog attach="fog" args={['#1a1a2e', 15, 35]} />
      </Canvas>
    </div>
  );
};
