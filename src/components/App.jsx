/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react"

function App() {
  return (
    <div id='App'>
      <img src="./src/assets/closeup.jpg" alt="closeup" className='closeup prl700'/>

      <nav className="navbar">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <div className="nav-item active" id="home">
              <span className="nav-link" href="#">Home</span>
            </div>
            <div className="nav-item">
              <span className="nav-link" href="#">Features</span>
            </div>
            <div className="nav-item">
              <span className="nav-link" href="#">Pricing</span>
            </div>
          </div>
        </div>
      </nav>

      <div id='jumbotron'>
        <div>
          <div className='main prl1300'>
            <h1 className='head'>
              Tekkom.3D
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

      </div>
      <div id="exp"></div>
    </div>
  )
}

export default App
