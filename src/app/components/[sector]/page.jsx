import Components from "../page"
import upperCase from "@/components/upperCase"

export const metadata = {
  title: ""
}

export default function Sector ({params}) {
  metadata.title = upperCase(params.sector)
  return (
    <Components params={params}/>
  )
}