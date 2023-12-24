import Viewer from "./Viewer"

export const metadata = {
  title: ""
}

export default function Sector ({params}) {
  metadata.title = params.part.length < 5 ? params.part.toUpperCase() : `${params.part.charAt(0).toUpperCase()}${params.part.slice(1)}`
  return (
    <Viewer params={params}/>
  )
}