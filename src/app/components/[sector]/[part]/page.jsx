import Viewer from "./Viewer"
import upperCase from "@/components/upperCase"

export const metadata = {
  title: ""
}

export default function Sector ({params}) {
  metadata.title = upperCase(params.part)
  return (
    <Viewer params={params}/>
  )
}