/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

// import { useState } from "react"
import Box from "../canvas/Box"
import object from './object'
import { Link } from 'react-router-dom'
import { useEffect } from "react"

const demo3D = new object('demo','block','3dblock',
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
      <img src="./assets/closeup.jpg" alt="closeup" className='closeup prl700'/>

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
      </div>
      <div id="three">
        <div className="part info">
          <h1 className="h1">Three Fiber</h1>
          <div className="content">
            <p>
            Seamlessly integrating React.js and Three.js, creating a visually engaging experience with real-time manipulation of 3D objects
            </p>
          </div>
          <div className="content">
            <button className="learn">
              <Link to={'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'} target="_blank">Read Docs</Link>
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
        <h1 className="h1">Explore Components</h1>
        <div className="block">
          {
            parts.map(part => (
              <Link key={part.src} to={`./viewer/${part.url}`} className="item">
                <img src={`./assets/${part.src}.png`} alt={part.name} />
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
  )
}

export default App
