/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
'use client'

import { Suspense, useRef, useEffect } from "react";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer } from 'three'
import { Canvas, useFrame } from '@react-three/fiber';

import CanvasLoader from '@/components/CanvasLoader'

const Computers = ({ scale, speed, src, light, pos, rot }) => {
  const boxRef = useRef();

  useFrame((state, delta) => {
    if (boxRef.current.mixer) {
      boxRef.current.mixer.update(delta);
    }
    boxRef.current.rotation.y += (speed[0]);
    boxRef.current.rotation.x += (speed[1]);
    boxRef.current.rotation.z += (speed[2]);
    
    // boxRef.current.children.forEach((child) => {
    //   if (child !== scene) {
    //     boxRef.current.remove(child);
    //   }
    // });
  });


  const { scene, animations } = useGLTF(`/3dasset/${src}/scene.gltf`);
  const { clips } = useAnimations(animations)

  const point = light[0] == 'point' || light[0] == 'batch'
  const direct = light[0] == 'direct' || light[0] == 'batch'

  const off = light[2];
  const isOff = (source) => {return off ? off.includes(source) : false}

  useEffect(() => {
    if (clips.length > 0) {
      const firstAnimation = animations[0];
      const mixer = new AnimationMixer(scene);
      const action = mixer.clipAction(firstAnimation);
      action.play()

      boxRef.current.mixer = mixer;
    }
  }, [clips, animations, scene]);
  
  return (
    <group ref={boxRef}>
      <mesh>
        <pointLight intensity={point && !isOff('up') ? light[1]*100 : 0} position={[0,15,0]}/>
        <pointLight intensity={point && !isOff('bt') ? light[1]*100 : 0} position={[0,-15,0]}/>
        <pointLight intensity={point && !isOff('fr') ? light[1]*100 : 0} position={[0,0,15]}/>
        <pointLight intensity={point && !isOff('bc') ? light[1]*100 : 0} position={[0,0,-15]}/>
        <pointLight intensity={point && !isOff('rg') ? light[1]*100 : 0} position={[15,0,0]}/>
        <pointLight intensity={point && !isOff('lf') ? light[1]*100 : 0} position={[-15,0,0]}/>

        <directionalLight intensity={direct && !isOff('up') ? light[1] : 0} position={[0,15,0]}/>
        <directionalLight intensity={direct && !isOff('bt') ? light[1] : 0} position={[0,-15,0]}/>
        <directionalLight intensity={direct && !isOff('fr') ? light[1] : 0} position={[0,0,15]}/>
        <directionalLight intensity={direct && !isOff('bc') ? light[1] : 0} position={[0,0,-15]}/>
        <directionalLight intensity={direct && !isOff('rg') ? light[1] : 0} position={[15,0,0]}/>
        <directionalLight intensity={direct && !isOff('lf') ? light[1] : 0} position={[-15,0,0]}/>
        <primitive
          object={scene}
          scale={scale}
          position={pos ? [pos[0],pos[1],pos[2]] : [0,0,0]}
          rotation={rot ? [rot[0],rot[1],rot[2]] : [0,0,0]}
        >
          <mesh></mesh>
        </primitive>
      </mesh>
    </group>
  );
};

export default function Box ({scale, speed, src, light, pos, rot}) {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      shadows
      camera={{ position: [20,20,20], fov: 50, }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls/>
        <Computers scale={scale} speed={speed} src={src} light={light} pos={pos} rot={rot}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  );
}
