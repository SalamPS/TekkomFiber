/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from "@react-three/drei";
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
  // const modelPath = `/TekkomFiber/${src}/scene.gltf`;
  const modelPath = `/${src}/scene.gltf`;
  
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

  return (
    <>
      <group ref={group} scale={scale} position={[pos[0],pos[1],pos[2]]} rotation={[rot[0],rot[1],rot[2]]}/>
      <hemisphereLight intensity={(light? light : 5)} groundColor='black' />
      <spotLight
        position={[20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={(light? 2*light : 2)} />
    </>
  );
};

export default function Box ({scale, speed, src, light, pos, rot}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20,20,20], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls/>
      <Computers scale={isMobile ? scale*0.7 : scale} speed={speed} src={src} light={light} pos={pos} rot={rot}/>

    </Canvas>
  );
}
