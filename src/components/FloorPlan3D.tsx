import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Animated routing line component (Google Maps style)
const RouteAnimation = ({ 
  points, 
  color = '#4285f4', 
  delay = 0 
}: { 
  points: [number, number, number][]; 
  color?: string; 
  delay?: number;
}) => {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Pulsing effect on the route
    if (materialRef.current) {
      const pulse = Math.sin(time * 3 + delay) * 0.15 + 0.85;
      materialRef.current.opacity = pulse;
    }
    
    // Progress animation (route drawing effect)
    setAnimationProgress((time + delay) % 5 / 5);
  });

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  }, [points]);

  // Create the visible portion of the route based on animation progress
  const visibleCurve = useMemo(() => {
    const totalPoints = curve.getPoints(100);
    const visiblePointCount = Math.max(2, Math.floor(totalPoints.length * animationProgress));
    const visiblePoints = totalPoints.slice(0, visiblePointCount);
    return visiblePoints.length >= 2 ? new THREE.CatmullRomCurve3(visiblePoints) : null;
  }, [curve, animationProgress]);

  const tubularSegments = Math.max(2, Math.floor(50 * animationProgress));

  if (!visibleCurve || animationProgress < 0.02) return null;

  return (
    <group>
      {/* Main route tube */}
      <mesh>
        <tubeGeometry args={[visibleCurve, tubularSegments, 0.08, 8, false]} />
        <meshBasicMaterial ref={materialRef} color={color} transparent opacity={0.9} />
      </mesh>
      
      {/* Glowing effect underneath */}
      <mesh>
        <tubeGeometry args={[visibleCurve, tubularSegments, 0.15, 8, false]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

// Navigation marker (start/end points)
const NavigationMarker = ({ 
  position, 
  color = '#4285f4',
  type = 'destination'
}: { 
  position: [number, number, number]; 
  color?: string;
  type?: 'start' | 'destination';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (glowRef.current) {
      const scale = 1 + Math.sin(time * 4) * 0.15;
      glowRef.current.scale.set(scale, scale, scale);
    }
    
    if (meshRef.current && type === 'destination') {
      meshRef.current.position.y = position[1] + Math.sin(time * 3) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Glow effect */}
      <mesh ref={glowRef} position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>
      
      {/* Pin marker */}
      <mesh ref={meshRef} position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0, 0.2, 0.5, 8]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      
      {/* Base dot */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.05, 16]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.5}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
};

// Building component (Google Maps style)
const Building = ({ 
  position, 
  size, 
  height = 1,
  color = '#e8e8e8'
}: { 
  position: [number, number, number]; 
  size: [number, number]; 
  height?: number;
  color?: string;
}) => {
  return (
    <mesh position={[position[0], height / 2, position[2]]} castShadow receiveShadow>
      <boxGeometry args={[size[0], height, size[1]]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.8} 
        metalness={0.1}
        envMapIntensity={0.2}
      />
    </mesh>
  );
};

// Main scene
const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Define multiple routes (like Google Maps)
  const routes = [
    {
      points: [
        [-7, 0.15, 6] as [number, number, number],
        [-4, 0.15, 4] as [number, number, number],
        [-1, 0.15, 3] as [number, number, number],
        [2, 0.15, 2] as [number, number, number],
        [5, 0.15, 0] as [number, number, number],
        [6, 0.15, -2] as [number, number, number],
      ],
      color: '#4285f4',
      delay: 0
    },
    {
      points: [
        [-6, 0.15, -5] as [number, number, number],
        [-3, 0.15, -3] as [number, number, number],
        [0, 0.15, -2] as [number, number, number],
        [3, 0.15, 0] as [number, number, number],
        [5, 0.15, 2] as [number, number, number],
      ],
      color: '#34a853',
      delay: 1.5
    }
  ];

  return (
    <group ref={groupRef}>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.5} />
      
      {/* Sun-like directional light */}
      <directionalLight 
        position={[15, 20, 10]} 
        intensity={1.2} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      
      {/* Fill light */}
      <directionalLight position={[-10, 15, -10]} intensity={0.3} />
      
      {/* Hemisphere light for sky/ground color */}
      <hemisphereLight args={['#87ceeb', '#8b7355', 0.4]} />

      {/* Ground plane (like Google Maps terrain) */}
      <mesh position={[0, -0.02, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#c8d5b9" 
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>

      {/* Roads/paths */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[1.2, 0.01, 20]} />
        <meshStandardMaterial color="#b8b8b8" roughness={0.7} />
      </mesh>
      <mesh position={[-3, 0, 2]} receiveShadow rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.2, 0.01, 12]} />
        <meshStandardMaterial color="#b8b8b8" roughness={0.7} />
      </mesh>
      <mesh position={[3, 0, -1]} receiveShadow rotation={[0, -Math.PI / 6, 0]}>
        <boxGeometry args={[1.2, 0.01, 10]} />
        <meshStandardMaterial color="#b8b8b8" roughness={0.7} />
      </mesh>

      {/* Buildings - various heights and positions */}
      <Building position={[-5, 0, 4]} size={[3, 3.5]} height={1.5} color="#e3ddd3" />
      <Building position={[-2, 0, 5]} size={[2.5, 2]} height={2.2} color="#d4cfc6" />
      <Building position={[2, 0, 4]} size={[3.5, 3]} height={1.8} color="#e8e3d9" />
      <Building position={[5.5, 0, 3]} size={[2, 2.5]} height={1.3} color="#e0dbd1" />
      
      <Building position={[-6, 0, 0]} size={[2.5, 4]} height={2} color="#ddd8ce" />
      <Building position={[-3, 0, -1]} size={[3, 3]} height={1.6} color="#e5e0d6" />
      <Building position={[1, 0, -1]} size={[2, 2.5]} height={1.4} color="#d9d4ca" />
      <Building position={[4, 0, -2]} size={[3, 3.5]} height={1.9} color="#e2ddd3" />
      
      <Building position={[-5, 0, -4]} size={[2.5, 2.5]} height={1.7} color="#e0dbd1" />
      <Building position={[-1, 0, -5]} size={[3, 2]} height={1.5} color="#dbd6cc" />
      <Building position={[3, 0, -5]} size={[2.5, 3]} height={2.1} color="#e6e1d7" />
      <Building position={[6, 0, -4]} size={[2, 2]} height={1.2} color="#d8d3c9" />

      {/* Trees/green spaces */}
      <mesh position={[-7, 0.3, 2]} castShadow>
        <cylinderGeometry args={[0, 0.4, 0.8, 8]} />
        <meshStandardMaterial color="#6b8e23" roughness={0.9} />
      </mesh>
      <mesh position={[7, 0.3, 1]} castShadow>
        <cylinderGeometry args={[0, 0.4, 0.8, 8]} />
        <meshStandardMaterial color="#6b8e23" roughness={0.9} />
      </mesh>
      <mesh position={[-2, 0.25, -6]} castShadow>
        <cylinderGeometry args={[0, 0.3, 0.6, 8]} />
        <meshStandardMaterial color="#6b8e23" roughness={0.9} />
      </mesh>

      {/* Animated routes */}
      {routes.map((route, index) => (
        <RouteAnimation key={index} {...route} />
      ))}

      {/* Navigation markers */}
      <NavigationMarker position={[-7, 0, 6]} color="#4285f4" type="start" />
      <NavigationMarker position={[6, 0, -2]} color="#ea4335" type="destination" />
      
      <NavigationMarker position={[-6, 0, -5]} color="#34a853" type="start" />
      <NavigationMarker position={[5, 0, 2]} color="#fbbc04" type="destination" />
    </group>
  );
};

export const FloorPlan3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 18, 18]} fov={45} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={10}
          maxDistance={30}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
          autoRotate
          autoRotateSpeed={0.3}
        />
        <Scene />
        <color attach="background" args={['#d4e5f2']} />
      </Canvas>
    </div>
  );
};
