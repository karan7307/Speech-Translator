import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import STT3D from './STT3D';
import Translate3D from './Translate3D';
import TTS3D from './TTS3D';

export default function Scene3D() {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} />
      
      {/* STT - Left */}
      <group position={[-8, 0, 0]}>
        <STT3D />
      </group>

      {/* Translate - Center */}
      <group position={[0, 0, 0]}>
        <Translate3D />
      </group>

      {/* TTS - Right */}
      <group position={[8, 0, 0]}>
        <TTS3D />
      </group>

      {/* Background */}
      <mesh position={[0, 0, -30]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#0a0e27" />
      </mesh>

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate={false}
      />
    </Canvas>
  );
}
