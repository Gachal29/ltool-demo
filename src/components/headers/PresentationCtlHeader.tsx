import { NextPage } from "next"
import { displayName } from "consts/presentationConfig"


type Props = {
  currentPage: number
  presentationTheme?: string
}

const PresentationCtlHeader: NextPage<Props> = ({ currentPage, presentationTheme }) => {
  return (
    <header id="presentation-ctl-header-id" className="navbar sticky top-0 bg-base-100 border-b border-gray-500 shadow-md">
      {currentPage !== 1
        ? <h1 className="navbar-start text-3xl font-bold">{ presentationTheme || "" }</h1>
        : <h1 className="navbar-start text-3xl font-bold">{ displayName }</h1>
      }
    </header>
  )
}

export default PresentationCtlHeader
