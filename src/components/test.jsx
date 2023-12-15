import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";

export default function Front_tree_one(props) {
  const { nodes, materials } = useGLTF("images/Front_tree_one.glb");
  return (
    <>
      <group {...props} dispose={null} position={[100, 0, -15]} scale={[0.3, 0.3, 0.3]}>
        <group position={[0, 0, -50]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_bark_0.geometry}
            material={materials.bark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_leaves_0.geometry}
            material={materials.leaves}
          />
        </group>
      </group>

      <group {...props} dispose={null} position={[100, 0, -215]} scale={[0.3, 0.3, 0.3]}>
        <group position={[0, 0, -50]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_bark_0.geometry}
            material={materials.bark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_leaves_0.geometry}
            material={materials.leaves}
          />
        </group>
      </group>

      <group {...props} dispose={null} position={[100, 0, 185]} scale={[0.3, 0.3, 0.3]}>
        <group position={[0, 0, -50]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_bark_0.geometry}
            material={materials.bark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_leaves_0.geometry}
            material={materials.leaves}
          />
        </group>
      </group>

      <group {...props} dispose={null} position={[170, 0, 185]} scale={[0.3, 0.3, 0.3]}>
        <group position={[0, 0, -50]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_bark_0.geometry}
            material={materials.bark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_leaves_0.geometry}
            material={materials.leaves}
          />
        </group>
      </group>

      <group {...props} dispose={null} position={[170, 0, -15]} scale={[0.3, 0.3, 0.3]}>
        <group position={[0, 0, -50]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_bark_0.geometry}
            material={materials.bark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree6_leaves_0.geometry}
            material={materials.leaves}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("images/Front_tree_one.glb");