'use client'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import React, {useCallback} from 'react'

export default function ParticlesContainer ({amount}) {
  // const [init, setInit] = useState(false);
  let init = false;
  initParticlesEngine(async (engine) => {;
    await loadSlim(engine);
  }).then(() => {
    init = true;
  });

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id='tsparticles'
      init={initParticlesEngine}
      loaded={particlesLoaded}
      className='particles'

      options={{
        fullScreen: {enable: false},
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#e68e2e'
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: amount
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: {min: 1, max: 5}
          },
        },
        detectRetina: true
      }}
    />
  )
}