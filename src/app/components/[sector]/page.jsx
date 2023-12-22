import styles from './sector.css'

import Image from 'next/image'
import list from '../../../components/list'

export default function Sector ({params}) {
  const show = list.filter(item => item.sector == params.sector)
  return (
    <div id="Sector">
      All Components from Specific Sector Shown here
    </div>
  )
}