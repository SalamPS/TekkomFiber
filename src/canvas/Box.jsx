/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

const Computers = ({ scale, speed, src, light, pos }) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current.mixer) {
      group.current.mixer.update(delta);
    }
    group.current.rotation.y += (speed? speed : 0.0015);
    group.current.position.y = (pos? pos : 0);
  });

  const loader = new GLTFLoader();
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
      <group ref={group} scale={scale}/>
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

export default function Box ({cam, scale, speed, src, light, pos}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [cam[0], cam[1], cam[2]], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls/>
      <Computers isMobile={isMobile} scale={scale} speed={speed} src={src} light={light} pos={pos}/>

    </Canvas>
  );
}
