'use client'

import { useEffect, useState } from 'react'
import styles from './components.css'

import Link from 'next/link';
import Image from 'next/image'
import list from '../../components/list'
import ParticlesContainer from '../../components/ParticlesContainer'

const Sector = () => {
  
}

const Preview = () => {
  return (
    <div id="preview">
      <h1 className='tag'>Tekkom.3Fiber</h1>
      <h2 className='tag'>Dive into a dynamic visual experience, interact with intricate details, and gain insights into the inner workings of Computer components</h2>
    </div>
  )
}

function Components({params}) {
  const sectors = list.reduce((result, item) => {
    const group = item.sector;
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {});

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
            <Link key={sector} className='box' href={`/components/${sector}`}>
              <span className={`icon bi bi-${item[0].icon}`}></span>
              <span className="title">{sector.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      </div>
      <div id="sectorPreview">
        {params.sector ? <Sector/> : <Preview/>}
      </div>
    </div>
  )
}

export default Components
