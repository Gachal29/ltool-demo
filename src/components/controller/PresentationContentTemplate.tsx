import { Content } from "model/material"
import { NextPage } from "next"

type Props = {
  content: Content
}

const PresentationContentTemplate: NextPage<Props> = ({ content }) => {
  return (
    <div>
      {content.type === "scrapbox" &&
        <h1 className="text-2xl">
          {content.shortContent.type = "text" &&
            content.shortContent.content
          }
        </h1>
      }
    </div>
  )
}

export default PresentationContentTemplate
