'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// const AnimatedShape = () => {
//   const meshRef = useRef(null);

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (meshRef.current) {
//       meshRef.current.rotation.x = Math.cos(t / 4) / 4;
//       meshRef.current.rotation.y = Math.sin(t / 4) / 4;
//       meshRef.current.position.y = Math.sin(t / 1.5) / 5;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
//       <mesh ref={meshRef} position={[2, 0, -5]}>
//         <icosahedronGeometry args={[1, 15]} />
//         <MeshDistortMaterial
//           color="#22d3ee"
//           speed={3}
//           distort={0.4}
//           radius={1}
//           metalness={0.8}
//           roughness={0.2}
//           emissive="#0891b2"
//           emissiveIntensity={0.5}
//         />
//       </mesh>
//     </Float>
//   );
// };

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, []);

  const ref = useRef(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.05;
      ref.current.rotation.x = t * 0.02;
    }
  });

  return (
    <Points positions={points} ref={ref}>
      <PointMaterial
        transparent
        color="#818cf8"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Scene3D = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#22d3ee" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#818cf8" intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Suspense fallback={null}>
        {/* <AnimatedShape /> */}
        <ParticleField />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;