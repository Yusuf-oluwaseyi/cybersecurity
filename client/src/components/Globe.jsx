import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const GlobeMesh = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.1; // Slow rotation

        // Mouse parallax
        const { mouse } = state;
        meshRef.current.rotation.x = mouse.y * 0.2;
        meshRef.current.rotation.z = mouse.x * 0.2;
    });

    return (
        <Sphere args={[1, 32, 32]} ref={meshRef} scale={2.5}>
            <meshStandardMaterial
                color="#4A90E2"
                wireframe
                transparent
                opacity={0.3}
                roughness={0}
                metalness={0.5}
            />
        </Sphere>
    );
};

const Globe = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <GlobeMesh />
            </Canvas>
        </div>
    );
};

export default Globe;
