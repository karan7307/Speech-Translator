import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function STT3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const meshRef = useRef();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsRecording(true);
      const res = await axios.post('http://127.0.0.1:8000/stt', formData);
      console.log('STT Result:', res.data.text);
      alert('Speech to Text: ' + res.data.text);
      setIsRecording(false);
    } catch (error) {
      console.error('STT Error:', error);
      alert('Error: ' + error.message);
      setIsRecording(false);
    }
  };

  const handleClick = () => {
    document.getElementById('stt-input').click();
  };

  return (
    <>
      <mesh
        ref={meshRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={handleClick}
        scale={isHovered ? 1.3 : 1}
      >
        <icosahedronGeometry args={[2, 4]} />
        <meshStandardMaterial
          color={isRecording ? '#ff6b6b' : isHovered ? '#4ecdc4' : '#1dd1a1'}
          emissive={isHovered ? '#0a9396' : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      <input
        type="file"
        accept="audio/*"
        onChange={handleUpload}
        style={{ display: 'none' }}
        id="stt-input"
      />
    </>
  );
}
