"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, MeshTransmissionMaterial } from "@react-three/drei"
import type * as THREE from "three"

function DNAStrand() {
  const groupRef = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  // Generate helix points
  const { spheres, connections } = useMemo(() => {
    const sphereData: { position: [number, number, number]; color: string }[] = []
    const connectionData: { start: [number, number, number]; end: [number, number, number] }[] = []

    const turns = 3
    const pointsPerTurn = 12
    const totalPoints = turns * pointsPerTurn
    const radius = 1.2
    const height = 6

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints
      const angle = t * turns * Math.PI * 2

      // First strand
      const x1 = Math.cos(angle) * radius
      const y1 = t * height - height / 2
      const z1 = Math.sin(angle) * radius

      // Second strand (offset by PI)
      const x2 = Math.cos(angle + Math.PI) * radius
      const y2 = t * height - height / 2
      const z2 = Math.sin(angle + Math.PI) * radius

      sphereData.push({ position: [x1, y1, z1], color: "#00E5FF" })
      sphereData.push({ position: [x2, y2, z2], color: "#FFFFFF" })

      // Connection every 3rd point
      if (i % 3 === 0) {
        connectionData.push({
          start: [x1, y1, z1],
          end: [x2, y2, z2],
        })
      }
    }

    return { spheres: sphereData, connections: connectionData }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += 0.003

      // Mouse interaction - subtle tilt
      groupRef.current.rotation.x = pointer.y * 0.1
      groupRef.current.rotation.z = pointer.x * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Spheres */}
        {spheres.map((sphere, i) => (
          <mesh key={`sphere-${i}`} position={sphere.position}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color={sphere.color}
              emissive={sphere.color}
              emissiveIntensity={0.5}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>
        ))}

        {/* Connections */}
        {connections.map((conn, i) => {
          const start = conn.start
          const end = conn.end
          const midX = (start[0] + end[0]) / 2
          const midY = (start[1] + end[1]) / 2
          const midZ = (start[2] + end[2]) / 2
          const length = Math.sqrt(
            Math.pow(end[0] - start[0], 2) +
            Math.pow(end[1] - start[1], 2) +
            Math.pow(end[2] - start[2], 2)
          )

          return (
            <mesh
              key={`conn-${i}`}
              position={[midX, midY, midZ]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <cylinderGeometry args={[0.02, 0.02, length, 8]} />
              <meshStandardMaterial
                color="#00E5FF"
                transparent
                opacity={0.4}
              />
            </mesh>
          )
        })}

        {/* Glow orbs */}
        {[0, 1, 2].map((i) => (
          <mesh key={`glow-${i}`} position={[0, i * 2 - 2, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={0.5}
              chromaticAberration={0.1}
              transmission={0.95}
              roughness={0.1}
              color="#00E5FF"
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00E5FF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export function DNAHelix() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFFFFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00E5FF" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          color="#00E5FF"
        />
        <DNAStrand />
        <Particles />
      </Canvas>
    </div>
  )
}
