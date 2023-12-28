'use client'

// import { useState } from "react"
import Box from "@/components/Box"
import object from '@/components/object'
import sector from "@/components/sectors"
import Parallax from "@/components/Parallax"
import ParticlesContainer from '@/components/ParticlesContainer'
import styles from './index.css'

import Link from 'next/link';
import Image from 'next/image'

const demo3D = new object('demo','type','name','desc','icon','prev',
  {
    scale: 3,
    speed: [0, 0, 0],
    light: ["point", 2, ['bt']],
    pos: [0, -6, 0],
    rot: [0, 0, 0],
    src: 'rgb_lego_cubes'
  }
)

function App() {
  const scroll = id => { 
    document.querySelector(`#${id}`).scrollIntoView()
  }
  return (
    <div id='App'>
      <Parallax speed={0.5} id={"closeup"}>
        <Image
        src="/common/closeup.jpg"
        alt="closeup"
        className='closeup'
        width={1000}
        height={1000}
        priority
        />
      </Parallax>

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
        <div className="inner">
          <div className='main'>
            <Parallax speed={0.45} id={"jb-head"}>
              <h1 className='head'>Tekkom</h1>
              <h1 className='head'>Three.Fiber</h1>
            </Parallax>
            <Parallax speed={0.42} id={"jb-tag"}>
              <h3 className='tagline'>PMM - Kelompok 5</h3>
            </Parallax>
          </div>

          <Parallax speed={0.15} id={"jb-drop"}>
            <div className="go-next">
              <span onClick={() => {scroll('about')}}>
                <div className='ico'>
                  <i className="bi bi-caret-down"></i>
                </div>
              </span>
            </div>
          </Parallax>
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
              <p>
                <Link href={"https://www.facebook.com/TekomUPI/"} target="_blank"><i className="bi bi-facebook"></i></Link>
                <Link href={"https://www.instagram.com/teknikkomputer.upi/"} target="_blank"><i className="bi bi-instagram"></i></Link>
                <Link href={"https://www.youtube.com/channel/UCB7cJpgISgx-81d_PyV6DGQ"} target="_blank"><i className="bi bi-youtube"></i></Link>
                <Link href={"https://www.twitter.com/tekomupicibiru"} target="_blank"><i className="bi bi-twitter"></i></Link>
              </p>
            </div>
            <div className="context">
              <Image
                src="/common/arduino.png"
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
          <div className="visit">
            <span class="bi bi-caret-right-fill"></span>
            <span class="bi bi-caret-right-fill"></span>
            <span class="bi bi-caret-right-fill"></span>
          </div>
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
          <div className="visit">
            <span class="bi bi-caret-right-fill"></span>
            <span class="bi bi-caret-right-fill"></span>
            <span class="bi bi-caret-right-fill"></span>
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
              sector.map((item,i) => (
                (i >= 4 ? '' : 
                <Link key={item.sector} href={`/components/${item.sector}`} className="item">
                  <div className="thumbnail">
                    <Image
                      src={`/preview/${item.sector}.png`}
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="preview">
                    <div className="title">{item.name}</div>
                    <div className="prev">{item.desc[0]}</div>
                  </div>
                </Link>)
              ))
            }
          </div>
          <div className="more">
            <Link href="/components/">
              <button>SHOW MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
