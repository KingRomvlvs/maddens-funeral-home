"use client";

import * as React from "react";
import * as THREE from "three";
import { useGLTF, Center, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import type { MaterialPreset, InteriorPreset } from "@/lib/marketplace/types";

interface ProductModelProps {
  modelPath: string;
  material: MaterialPreset;
  interior?: InteriorPreset;
  scale?: number;
  category: "caskets" | "urns";
  isOpen?: boolean;
}

// Animated mesh component for the lid
const AnimatedGroup = animated.group;

function PlaceholderCasket({
  material,
  interior,
  isOpen = false,
}: {
  material: MaterialPreset;
  interior?: InteriorPreset;
  isOpen?: boolean;
}) {
  const groupRef = React.useRef<THREE.Group>(null);

  // Animate lid opening/closing
  const { lidRotation } = useSpring({
    lidRotation: isOpen ? -Math.PI / 3 : 0,
    config: { mass: 1, tension: 120, friction: 20 },
  });

  // Slow rotation when not interacting
  useFrame((_, delta) => {
    if (groupRef.current && !isOpen) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  const bodyColor = new THREE.Color(material.color);
  const interiorColor = interior
    ? new THREE.Color(interior.color)
    : new THREE.Color("#f5f5f5");
  const handleColor = new THREE.Color(
    material.metalness > 0.5 ? material.color : "#8b6914"
  );

  // Casket dimensions (more realistic proportions)
  const length = 2.2;
  const width = 0.75;
  const height = 0.55;
  const lidHeight = 0.25;
  const wallThickness = 0.06;

  return (
    <group ref={groupRef}>
      {/* ===== CASKET BASE ===== */}
      {/* Main body - outer shell */}
      <RoundedBox
        args={[length, height, width]}
        radius={0.04}
        smoothness={4}
        position={[0, height / 2, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </RoundedBox>

      {/* Interior cavity */}
      <RoundedBox
        args={[
          length - wallThickness * 2,
          height - wallThickness,
          width - wallThickness * 2,
        ]}
        radius={0.02}
        smoothness={4}
        position={[0, height / 2 + wallThickness / 2, 0]}
      >
        <meshStandardMaterial color={interiorColor} roughness={0.95} />
      </RoundedBox>

      {/* Interior pillow area */}
      <mesh position={[length / 2 - 0.35, height - 0.02, 0]}>
        <boxGeometry args={[0.5, 0.08, width - 0.2]} />
        <meshStandardMaterial color={interiorColor} roughness={0.9} />
      </mesh>

      {/* Decorative base rail */}
      <mesh position={[0, 0.06, 0]} castShadow>
        <boxGeometry args={[length + 0.08, 0.08, width + 0.08]} />
        <meshStandardMaterial
          color={handleColor}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* ===== ANIMATED LID ===== */}
      <AnimatedGroup
        position={[0, height, -width / 2 + 0.02]}
        rotation-x={lidRotation}
      >
        {/* Lid pivot point adjustment */}
        <group position={[0, 0, width / 2 - 0.02]}>
          {/* Main lid */}
          <RoundedBox
            args={[length + 0.02, lidHeight, width]}
            radius={0.04}
            smoothness={4}
            position={[0, lidHeight / 2, 0]}
            castShadow
          >
            <meshStandardMaterial
              color={bodyColor}
              metalness={material.metalness}
              roughness={material.roughness}
            />
          </RoundedBox>

          {/* Lid interior (visible when open) */}
          <RoundedBox
            args={[
              length - wallThickness * 2,
              lidHeight - wallThickness,
              width - wallThickness * 2,
            ]}
            radius={0.02}
            smoothness={4}
            position={[0, wallThickness / 2, 0]}
          >
            <meshStandardMaterial color={interiorColor} roughness={0.95} />
          </RoundedBox>

          {/* Lid crown/dome detail */}
          <mesh position={[0, lidHeight, 0]} castShadow>
            <boxGeometry args={[length * 0.6, 0.04, width * 0.5]} />
            <meshStandardMaterial
              color={bodyColor}
              metalness={material.metalness}
              roughness={material.roughness}
            />
          </mesh>

          {/* Decorative lid trim */}
          <mesh position={[0, lidHeight / 2, 0]} castShadow>
            <boxGeometry args={[length + 0.06, 0.03, width + 0.04]} />
            <meshStandardMaterial
              color={handleColor}
              metalness={0.85}
              roughness={0.25}
            />
          </mesh>
        </group>
      </AnimatedGroup>

      {/* ===== HANDLES ===== */}
      {/* Left side handles */}
      {[-0.7, -0.2, 0.3, 0.8].map((x, i) => (
        <group key={`handle-left-${i}`} position={[x, height / 2, -width / 2 - 0.04]}>
          {/* Handle bar */}
          <mesh castShadow>
            <capsuleGeometry args={[0.025, 0.12, 8, 16]} />
            <meshStandardMaterial
              color={handleColor}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
          {/* Handle mount */}
          <mesh position={[0, 0, 0.03]}>
            <boxGeometry args={[0.08, 0.04, 0.04]} />
            <meshStandardMaterial
              color={handleColor}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* Right side handles */}
      {[-0.7, -0.2, 0.3, 0.8].map((x, i) => (
        <group key={`handle-right-${i}`} position={[x, height / 2, width / 2 + 0.04]}>
          <mesh castShadow>
            <capsuleGeometry args={[0.025, 0.12, 8, 16]} />
            <meshStandardMaterial
              color={handleColor}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0, 0, -0.03]}>
            <boxGeometry args={[0.08, 0.04, 0.04]} />
            <meshStandardMaterial
              color={handleColor}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* End handles */}
      <group position={[-length / 2 - 0.04, height / 2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.025, 0.1, 8, 16]} />
          <meshStandardMaterial color={handleColor} metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
      <group position={[length / 2 + 0.04, height / 2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.025, 0.1, 8, 16]} />
          <meshStandardMaterial color={handleColor} metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* ===== CORNER DECORATIONS ===== */}
      {[
        [-length / 2 + 0.08, 0.15, -width / 2 + 0.06],
        [-length / 2 + 0.08, 0.15, width / 2 - 0.06],
        [length / 2 - 0.08, 0.15, -width / 2 + 0.06],
        [length / 2 - 0.08, 0.15, width / 2 - 0.06],
      ].map((pos, i) => (
        <mesh key={`corner-${i}`} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.06, height * 0.4, 0.04]} />
          <meshStandardMaterial color={handleColor} metalness={0.85} roughness={0.25} />
        </mesh>
      ))}
    </group>
  );
}

function PlaceholderUrn({ material }: { material: MaterialPreset }) {
  const meshRef = React.useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  const bodyColor = new THREE.Color(material.color);

  return (
    <group ref={meshRef}>
      {/* Decorative base */}
      <mesh position={[0, -0.42, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.25, 0.06, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Base pedestal */}
      <mesh position={[0, -0.35, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.22, 0.1, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Lower body */}
      <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.28, 0.2, 0.3, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Main body - widest part */}
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.28, 0.28, 0.35, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Upper body - taper */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.28, 0.2, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.2, 0.15, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Neck rim */}
      <mesh position={[0, 0.58, 0]} castShadow>
        <torusGeometry args={[0.14, 0.02, 16, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Lid base */}
      <mesh position={[0, 0.64, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.15, 0.08, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Lid dome */}
      <mesh position={[0, 0.72, 0]} castShadow>
        <sphereGeometry args={[0.12, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={material.metalness}
          roughness={material.roughness}
        />
      </mesh>

      {/* Lid finial */}
      <mesh position={[0, 0.82, 0]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={Math.min(material.metalness + 0.1, 1)}
          roughness={Math.max(material.roughness - 0.1, 0)}
        />
      </mesh>

      {/* Decorative band */}
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[0.29, 0.015, 16, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={Math.min(material.metalness + 0.1, 1)}
          roughness={Math.max(material.roughness - 0.1, 0)}
        />
      </mesh>

      {/* Second decorative band */}
      <mesh position={[0, -0.05, 0]}>
        <torusGeometry args={[0.285, 0.012, 16, 32]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={Math.min(material.metalness + 0.1, 1)}
          roughness={Math.max(material.roughness - 0.1, 0)}
        />
      </mesh>
    </group>
  );
}

function GLTFModel({
  modelPath,
  material,
  scale = 1,
}: {
  modelPath: string;
  material: MaterialPreset;
  scale: number;
}) {
  const { scene } = useGLTF(modelPath);
  const clonedScene = React.useMemo(() => scene.clone(), [scene]);

  React.useEffect(() => {
    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.color = new THREE.Color(material.color);
          mat.metalness = material.metalness;
          mat.roughness = material.roughness;
          mat.needsUpdate = true;
        }
      }
    });
  }, [clonedScene, material]);

  return (
    <primitive object={clonedScene} scale={scale} castShadow receiveShadow />
  );
}

export function ProductModel({
  modelPath,
  material,
  interior,
  scale = 1,
  category,
  isOpen = false,
}: ProductModelProps) {
  const [useGltf, setUseGltf] = React.useState(false);
  const [gltfError, setGltfError] = React.useState(false);

  React.useEffect(() => {
    if (!modelPath) {
      setUseGltf(false);
      return;
    }
    fetch(modelPath, { method: "HEAD" })
      .then((res) => {
        setUseGltf(res.ok);
        setGltfError(!res.ok);
      })
      .catch(() => {
        setUseGltf(false);
        setGltfError(true);
      });
  }, [modelPath]);

  return (
    <Center>
      <group scale={scale}>
        {useGltf && !gltfError ? (
          <GLTFModel modelPath={modelPath} material={material} scale={1} />
        ) : category === "caskets" ? (
          <PlaceholderCasket
            material={material}
            interior={interior}
            isOpen={isOpen}
          />
        ) : (
          <PlaceholderUrn material={material} />
        )}
      </group>
    </Center>
  );
}
