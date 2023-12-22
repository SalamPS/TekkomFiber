'use client'

// import { useState } from "react"
import Box from "../components/Box"
import object from '../components/object'
import ParticlesContainer from '../components/ParticlesContainer'
import styles from './index.css'

import Link from 'next/link';
import Image from 'next/image'

const demo3D = new object('demo','block','3dblock','blocks','box',
  {
    scale: 3,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, -6, 0],
    rot: [0, 0, 0],
    src: 'rgb_lego_cubes'
  }
)

const parts = [
  {name : "Virtual Graphics Array", url: "vga", src:"vga0", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name : "Virtual Graphics Array", url: "vga", src:"vga1", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name : "Virtual Graphics Array", url: "vga", src:"vga2", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name : "Virtual Graphics Array", url: "vga", src:"vga3", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
]

function App() {
  const scroll = id => { 
    document.querySelector(`#${id}`).scrollIntoView()
  }
  return (
    <div id='App'>
      <Image
        src="/closeup.jpg"
        alt="closeup"
        className='closeup prl700'
        width={1000}
        height={1000}
      />

      <nav className="navbar">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <div className="nav-item active" id="home">
              <span className="nav-link" onClick={() => {scroll('about')}}>Tekkom</span>
            </div>
            <div className="nav-item">
              <span className="nav-link" onClick={() => {scroll('three')}}>ThreeFiber</span>
            </div>
            <div className="nav-item">
              <span className="nav-link" onClick={() => {scroll('exp')}}>Explore</span>
            </div>
          </div>
        </div>
      </nav>

      <div id='jumbotron'>
        <div>
          <div className='main prl1300'>
            <h1 className='head'>
              Tekkom . 3Fiber
            </h1>
            <h3 className='tagline'>PMM - Kelompok 5</h3>
          </div>

          <div className="go-next prl1300">
            <span onClick={() => {scroll('about')}}>
              <div className='ico'>
                <i className="bi bi-caret-down"></i>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div id="about">
        <h1 className="h1">Computer Engineering</h1>
        <div className="content">
          <div id="intro">
            <div className="text">
              <h2>What is it?</h2>
              <p>
              Computer Engineering is a scientific discipline that includes computer science, computer design, construction technology, implementation and maintenance of modern computer software and hardware and computer-controlled equipment.
              </p>
              <button className="visit">Learn More</button>
            </div>
            <div className="context">
              <Image
                src="/arduino.png"
                alt="arduino"
                width={320}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
        <div className="content">
          <div id="more">
            <h2>Area of Expertise</h2>
            <div className="cards">
              <div className="card">
                <h3>Intelligent Device</h3>
                <p>
                  Studying the development of Device Design and Construction including Hardware & Software that applies the principles of Automation, Configuration as well as applications in fields such as industry, biomedicine, agriculture, electronics, mechatronics & robotics.
                </p>
              </div>
              <div className="card">
                <h3>Embedded System</h3>
                <p>
                  Studying Computer Architecture & Organization, implementing Embedded Systems & developing High Performance Computing technology prototypes, as well as reviewing Real Time System, Computer Graphic Image Processing, AR & VR technology.
                </p>
              </div>
              <div className="card">
                <h3>Network and Security</h3>
                <p>
                  Study the structure & application of Computer Networks, Computer Network analysis, types of Network Protocols & Interfaces. Implement Network Security and understand the concepts of Vulnerability, Cyber Attacks, Cryptography, & Ethical Hacking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="three">
        <div className="part info">
          <h1 className="h1">Three Fiber</h1>
          <div className="content">
            <p>
            Seamlessly integrating React.js and Three.js empowers the creation of a visually engaging and dynamically immersive experience, allowing for real-time manipulation and interaction with 3D objects.
            </p>
          </div>
          <div className="content">
            <button className="learn">
              <a to={'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'} target="_blank">Read Docs</a>
            </button>
          </div>
          <div className="content">
            <p>
            Dive into a dynamic visual experience, interact with intricate details, and gain insights into the inner workings of Computer components.
            </p>
          </div>
        </div>
        <div className="part demo">
          <div className="box">
            <Box
              scale={demo3D.prop.scale}
              speed={demo3D.prop.speed}
              light={demo3D.prop.light}
              pos={demo3D.prop.pos}
              rot={demo3D.prop.rot}
              src={demo3D.prop.src}
            />
          </div>
        </div>
      </div>
      <div id="exp">
        <ParticlesContainer amount={40}/>
        <div className="inner">
          <h1 className="h1">Explore Components</h1>
          <div className="block">
            {
              parts.map(part => (
                <Link key={part.src} href={`/components/gpu/${part.url}`} className="item">
                  <div className="thumbnail">
                    <Image
                      src={`/${part.src}.png`}
                      alt="arduino"
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                  <div className="preview">
                    <div className="title">{part.name}</div>
                    <div className="prev">{part.prev}</div>
                  </div>
                </Link>
              ))
            }
          </div>
          <div className="more">
            <button>SHOW MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
