import Components from "../page"

export const metadata = {
  title: ""
}

export default function Sector ({params}) {
  metadata.title = params.sector.length < 4 ? params.sector.toUpperCase() : `${params.sector.charAt(0).toUpperCase()}${params.sector.slice(1)}`
  console.log(Components)
  return (
    <Components params={params}/>
  )
}