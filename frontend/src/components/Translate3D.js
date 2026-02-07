import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Translate3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const meshRef = useRef();

  const handleTranslate = async () => {
    const text = prompt('Enter text to translate:');
    const lang = prompt('Enter language code (hi, en, fr, es, ja):') || 'hi';

    if (!text) return;

    try {
      setIsTranslating(true);
      const res = await axios.post('http://127.0.0.1:8000/translate', {
        text: text,
        lang: lang,
      });
      console.log('Translation Result:', res.data.output);
      alert('Translation: ' + res.data.output);
      setIsTranslating(false);
    } catch (error) {
      console.error('Translation Error:', error);
      alert('Error: ' + error.message);
      setIsTranslating(false);
    }
  };

  return (
    <mesh
      ref={meshRef}
      onClick={handleTranslate}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      scale={isHovered ? 1.3 : 1}
    >
      <octahedronGeometry args={[2, 2]} />
      <meshStandardMaterial
        color={isTranslating ? '#ffd93d' : isHovered ? '#6c5ce7' : '#a29bfe'}
        emissive={isHovered ? '#5f3dc4' : '#000000'}
        emissiveIntensity={isHovered ? 0.5 : 0}
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
  );
}
