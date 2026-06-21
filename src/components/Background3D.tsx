import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.04;
      ref.current.rotation.y -= delta * 0.06;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#edb1ff"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Purple orb */}
      <mesh position={[-3, 1.5, -2]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#9d50bb" emissive="#9d50bb" emissiveIntensity={0.8} transparent opacity={0.15} />
      </mesh>
      {/* Blue orb */}
      <mesh position={[3, -1, -3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#6e7dff" emissive="#6e7dff" emissiveIntensity={0.6} transparent opacity={0.12} />
      </mesh>
      {/* Small accent */}
      <mesh position={[1, 2, -4]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#c471ed" emissive="#c471ed" emissiveIntensity={1} transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, #0a0a0b 100%)'
      }} />
    </div>
  );
}
