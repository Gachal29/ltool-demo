import { NextPage } from "next"


type Props = {
  presentationTheme?: string
}

const PresentationCtlHeader: NextPage<Props> = ({ presentationTheme }) => {
  return (
    <header className="navbar">
      <h1 className="navbar-start text-2xl">{ presentationTheme || "" }</h1>
    </header>
  )
}

export default PresentationCtlHeader
