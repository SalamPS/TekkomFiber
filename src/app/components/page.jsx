'use client'

import { useEffect, useState } from 'react'
import styles from './components.css'

import Image from 'next/image'
import list from '../../components/list'
import ParticlesContainer from '../../components/ParticlesContainer'

function Components() {
  const [active, setActive] = useState(-1)

  const sectors = list.reduce((result, item) => {
    const group = item.sector;
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {});
  
  const activate = (hit) => setActive(hit);
  const deactivate = () => setActive(-1);

  return (
    <div id="Components">
      <ParticlesContainer amount={80}/>
      <div id="sectorList">
        <div className="head">
          <i className="bi bi-view-list"></i>
          <span className='title'>Components List</span>
        </div>
        <div className="body">
          {Object.entries(sectors).map(([sector, item]) => (
            <div key={sector} className='box'>
              <span className={`icon ${item.icon}`}></span>
              <span className="title">{sector.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
      <div id="sectorPreview">

      </div>
    </div>
  )
}

export default Components
