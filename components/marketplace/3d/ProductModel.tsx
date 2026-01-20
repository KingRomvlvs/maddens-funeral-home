"use client";

import * as React from "react";
import * as THREE from "three";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { MaterialPreset, InteriorPreset } from "@/lib/marketplace/types";

interface ProductModelProps {
  modelPath: string;
  material: MaterialPreset;
  interior?: InteriorPreset;
  scale?: number;
  category: "caskets" | "urns";
}

function PlaceholderCasket({
  material,
  interior,
}: {
  material: MaterialPreset;
  interior?: InteriorPreset;
}) {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  const materialProps = React.useMemo(
    () => ({
      color: new THREE.Color(material.color),
      metalness: material.metalness,
      roughness: material.roughness,
    }),
    [material]
  );

  const interiorColor = interior
    ? new THREE.Color(interior.color)
    : new THREE.Color("#f5f5f5");

  return (
    <group ref={meshRef}>
      {/* Main casket body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.6, 0.85]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Lid */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[2.45, 0.2, 0.9]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Interior visible through top cutout */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2.2, 0.5, 0.7]} />
        <meshStandardMaterial color={interiorColor} roughness={0.9} />
      </mesh>
      {/* Handles left */}
      {[-0.9, -0.3, 0.3, 0.9].map((x, i) => (
        <mesh key={`handle-left-${i}`} position={[x, 0, -0.45]}>
          <boxGeometry args={[0.15, 0.1, 0.08]} />
          <meshStandardMaterial
            color={material.metalness > 0.5 ? material.color : "#8b6914"}
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>
      ))}
      {/* Handles right */}
      {[-0.9, -0.3, 0.3, 0.9].map((x, i) => (
        <mesh key={`handle-right-${i}`} position={[x, 0, 0.45]}>
          <boxGeometry args={[0.15, 0.1, 0.08]} />
          <meshStandardMaterial
            color={material.metalness > 0.5 ? material.color : "#8b6914"}
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function PlaceholderUrn({ material }: { material: MaterialPreset }) {
  const meshRef = React.useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  const materialProps = React.useMemo(
    () => ({
      color: new THREE.Color(material.color),
      metalness: material.metalness,
      roughness: material.roughness,
    }),
    [material]
  );

  return (
    <group ref={meshRef}>
      {/* Base */}
      <mesh position={[0, -0.35, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.3, 0.1, 32]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.25, 0.6, 32]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Shoulder */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 0.1, 32]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.2, 0.2, 32]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Lid */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <sphereGeometry args={[0.15, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial {...materialProps} />
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
    <primitive
      object={clonedScene}
      scale={scale}
      castShadow
      receiveShadow
    />
  );
}

export function ProductModel({
  modelPath,
  material,
  interior,
  scale = 1,
  category,
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
          <PlaceholderCasket material={material} interior={interior} />
        ) : (
          <PlaceholderUrn material={material} />
        )}
      </group>
    </Center>
  );
}
