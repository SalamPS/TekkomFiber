'use client'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import React, {useEffect, useState} from 'react'

export default function ParticlesCustom ({amount, color}) {
  const particlesLoaded = () => {};

  return (
    <Particles
      id='jumbotronparticles'
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
            value: `#${color ? color[0] : ''}`
          },
          links: {
            color: `#${color ? color[1] : ''}`,
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