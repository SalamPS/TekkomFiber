/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react"

const parts = [
  {name : "Virtual Graphics Array", src:"vga0", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name : "Virtual Graphics Array", src:"vga1", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name : "Virtual Graphics Array", src:"vga2", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {name : "Virtual Graphics Array", src:"vga3", prev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
]

function App() {
  return (
    <div id='App'>
      <img src="./src/assets/closeup.jpg" alt="closeup" className='closeup prl700'/>

      <nav className="navbar">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <div className="nav-item active" id="home">
              <span className="nav-link" href="#">CompE</span>
            </div>
            <div className="nav-item">
              <span className="nav-link" href="#">ThreeFiber</span>
            </div>
            <div className="nav-item">
              <span className="nav-link" href="#">Explore</span>
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
            <a  href='#about'>
              <div className='ico'>
                <i className="bi bi-caret-down"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="about">
        <h1 className="h1">Computer Engineering</h1>
      </div>
      <div id="three">
        <div className="section block">
          <h1 className="h1">About Three Fiber</h1>
        </div>
        <div className="section bg">
          <img src="./src/assets/room.jpg" alt="room"/>
        </div>
      </div>
      <div id="exp">
        <h1 className="h1">Explore Components</h1>
        <div className="block">
          {
            parts.map(part => (
              <div key={part.src} className="item">
                <img src={`./src/assets/${part.src}.png`} alt={part.name} />
                <div className="preview">
                  <div className="title">{part.name}</div>
                  <div className="prev">{part.prev}</div>
                </div>
              </div>
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
