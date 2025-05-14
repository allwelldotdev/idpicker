"use client"

import { Canvas } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import { Suspense } from 'react'

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      style={{ 
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none' 
      }}
    >
      <Suspense fallback={null}>
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <torusGeometry args={[8, 3, 16, 100]} />
            <meshStandardMaterial 
              color="#007AFF" 
              wireframe 
              transparent
              opacity={0.1}
            />
          </mesh>
        </Float>
        <ambientLight intensity={0.5} />
      </Suspense>
    </Canvas>
  )
}

export default Scene
