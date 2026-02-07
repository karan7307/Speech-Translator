import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function TTS3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const meshRef = useRef();

  const handleSpeak = async () => {
    const text = prompt('Enter text to speak:');

    if (!text) return;

    try {
      setIsSpeaking(true);
      const res = await axios.post(
        'http://127.0.0.1:8000/tts',
        { text: text },
        { responseType: 'blob' }
      );

      const url = URL.createObjectURL(res.data);
      new Audio(url).play();
      setIsSpeaking(false);
    } catch (error) {
      console.error('TTS Error:', error);
      alert('Error: ' + error.message);
      setIsSpeaking(false);
    }
  };

  return (
    <mesh
      ref={meshRef}
      onClick={handleSpeak}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      scale={isHovered ? 1.3 : 1}
    >
      <tetrahedronGeometry args={[2.5, 0]} />
      <meshStandardMaterial
        color={isSpeaking ? '#ff7675' : isHovered ? '#00b894' : '#55efc4'}
        emissive={isHovered ? '#00a86b' : '#000000'}
        emissiveIntensity={isHovered ? 0.5 : 0}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}
