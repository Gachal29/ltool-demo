import { NextPage } from "next"
import { useWindowSize } from "utils/useWindowSize"

type Props = {
  presentationTheme: string
}

const PresentationThemeTemplate: NextPage<Props> = ({ presentationTheme }) => {
  const windowSize = useWindowSize()

  const divStyle = {
    /*
      65: headerのheight
      64: footerのheihgt
      32: mainのmargin-top
      64: mainのmargin-bottom
    */
    height: `${windowSize.height - 65 - 64 - 32 - 64}px`
  }

  return (
    <div style={ divStyle } className="flex justify-center items-center">
      <h1 className="text-6xl font-bold">{ presentationTheme }</h1>
    </div>
  )
}

export default PresentationThemeTemplate
