import styles from './components.css'

import Link from 'next/link';
import Image from 'next/image'
import ParticlesContainer from '@/components/ParticlesContainer'
import Carousel from '@/components/Carousel'
import sectors from '@/components/sectors'
import list from '@/components/list'

export const metadata = {
  title: "ShowCase"
}

const Preview = () => {
  return (
    <div id="preview">
      <h1 className='tag'>Tekkom.3Fiber</h1>
      <h2 className='tag'>Dive into a dynamic visual experience, interact with intricate details, and gain insights into the inner workings of Computer components</h2>
    </div>
  )
}

const Sector = ({sector}) => {
  const active = sectors.find(item => item.sector == sector)
  const visit = list.filter(item => item.sector == sector)

  const pass = []
  visit.forEach(item => {
    pass.push(
      {
        type: item.type,
        name: item.name,
        desc: item.desc,
        icon: item.icon,
        prop: item.prop,
        sector: item.sector,
        origin: item.origin
      }
    )
  })

  return (
    <div id="sector">
      <div id="list">
        <Carousel items={pass}/>
      </div>
      <div id="desc">
        <div className="text">
          <h1>{active.name}</h1>
          {active.desc.map((content,i) => (
            <p key={i}>{content}</p>
          ))}
        </div>
        <div className="dive">
          <Link href={`/components/${sector}/${visit[0].type}`}>
            <button>
              <span>Visit 3D</span>
            </button>
          </Link>
        </div>
      </div>
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
      <div id="sectorList" className={params.sector ? 'hide': 'show'}>
        <Link href={'/components'}>
          <div className="head">
            <i className="bi bi-view-list"></i>
            <span className='title'>Components</span>
          </div>
        </Link>
        <div className="body">
          <div className="nav">
            {Object.entries(sectors).map(([sector, item]) => (
              <Link key={sector} className={`box ${params.sector == sector ? 'active' : ''}`} href={`/components/${sector}`}>
                <div className="inner">
                  <div className="def">
                    <span className={`icon bi bi-${item[0].icon}`}></span>
                    <span className="title">{sector.toUpperCase()}</span>
                  </div>
                  <div className="on">
                    <span className={`bi bi-record-circle${params.sector == sector ? '-fill' : ' off'}`}></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="home">
            <Link className="box home" href={'/'}>
              <div className="inner">
                <div className="def">
                  <span className="icon bi bi-house-fill"></span>
                  <span className="title">Home</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div id="sectorPreview">
        {params.sector ? <Sector sector={params.sector}/> : <Preview/>}
      </div>
    </div>
  )
}

export default Components
