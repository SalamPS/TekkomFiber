/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/App.css'
import { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three'; // Import THREE

extend({ OrbitControls });

const Model = ({src, speed, scale, cam}) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current.mixer) {
      group.current.mixer.update(delta);
    }
    group.current.position.x += speed;
  });

  const { camera, gl } = useThree();
  camera.position.set(cam[0],cam[1],cam[2]);

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
      <orbitControls args={[camera, gl.domElement]}
        enableDamping={false}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}/>
    </>
  );
};

const Object = ({src, speed, scale, cam}) => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} intensity={10}/>
      <Model src={src} speed={speed} scale={scale} cam={cam}/>
    </Canvas>
  );
}


function App() {
  return (
    <div id='App'>
      <img src="./src/assets/closeup.jpg" alt="closeup" className='closeup f700'/>

      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src="./src/assets/tekkom.png" alt="" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <div className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      <div id='jumbotron'>
        <div>
          <div className='main f1300'>
            <h1 className='head'>
              Tekkom.3D
            </h1>
            <h3 className='tagline'>PMM - Kelompok 5</h3>
          </div>

          <div className="go-next f1300">
            <a  href='#about'>
              <div className='ico'>
                <i className="bi bi-caret-down"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="about"></div>
      <div id="exp"></div>
    </div>
  )
}

export default App
