/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls, Plane, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper, RectAreaLightHelper } from 'three';

import * as THREE from 'three';

const Computers = ({ scale, speed, src, light, pos, rot }) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current.mixer) {
      group.current.mixer.update(delta);
    }
    group.current.rotation.y += (speed[0]);
    group.current.rotation.x += (speed[1]);
    group.current.rotation.z += (speed[2]);
  });

  const loader = new GLTFLoader();
  const modelPath = `/3dasset/${src}/scene.gltf`;
  
  loader.load(
    modelPath,
    (gltf) => {
      const model = gltf.scene;

      if (gltf.animations && gltf.animations.length > 0) {
        const animation = gltf.animations[0];
        const mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(animation);
        action.play();

        group.current.mixer = mixer;
        group.current.children.forEach((child) => {
          if (child !== model) {
            group.current.remove(child);
          }
        });
      }
      group.current.add(model);
    },
    undefined,
    (error) => {
      console.error('Error loading 3D model', error);
    }
  );
  
  // const {intensity, distance, angle, x, y, z, width, height, color} = useControls({
  //   intensity: {value: 1, min: 0, max: 100}, 
  //   distance: {value: 1, min: 0, max: 10}, 
  //   angle: {value: 1, min: 0, max: 10}, 
  //   width: {value: 1, min: 0, max: 10}, 
  //   height: {value: 1, min: 0, max: 10}, 
  //   color: "#fff", 
  //   x: {value: 0, min: -5, max:10},
  //   y: {value: 10, min: -5, max:10},
  //   z: {value: 0, min: -5, max:10}
  // })
  const bottomLight = useRef();
  useHelper(bottomLight, DirectionalLightHelper, 1, 'red');
  const upperLight = useRef();
  useHelper(upperLight, DirectionalLightHelper, 1, 'red');
  const frontLight = useRef();
  useHelper(frontLight, DirectionalLightHelper, 1, 'yellow');
  const backLight = useRef();
  useHelper(backLight, DirectionalLightHelper, 1, 'yellow');
  const rightLight = useRef();
  useHelper(rightLight, DirectionalLightHelper, 1, 'blue');
  const leftLight = useRef();
  useHelper(leftLight, DirectionalLightHelper, 1, 'blue');
  return (
    <>
      <directionalLight position={[0,20,0]} ref={bottomLight}/>
      <directionalLight position={[0,-20,0]} ref={upperLight}/>
      <directionalLight position={[0,0,20]} ref={frontLight}/>
      <directionalLight position={[0,0,-20]} ref={backLight}/>
      <directionalLight position={[20,0,0]} ref={rightLight}/>
      <directionalLight position={[-20,0,0]} ref={leftLight}/>
      <group ref={group} scale={scale} position={pos ? [pos[0],pos[1],pos[2]] : [0,0,0]} rotation={rot ? [rot[0],rot[1],rot[2]] : [0,0,0]}/>
    </>
  );
};


export default function Box ({scale, speed, src, light, pos, rot}) {
  return (
    <Canvas
      shadows
      camera={{ position: [20,20,20], fov: 50, }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls/>
      <Computers scale={scale} speed={speed} src={src} light={light} pos={pos} rot={rot}/>
    </Canvas>
  );
}
