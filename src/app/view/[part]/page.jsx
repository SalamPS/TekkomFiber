import Viewer from '../page'

export default function Parts ({params}) {
  return (
    <>
      <Viewer part={params.part}/>
    </>
  )
}