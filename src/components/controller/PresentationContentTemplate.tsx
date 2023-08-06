import { Content } from "model/material"
import { NextPage } from "next"
import Image from "next/image"

type Props = {
  content: Content
}

const PresentationContentTemplate: NextPage<Props> = ({ content }) => {
  const slideContents: any = []

  if (content.type === "scrapbox") {
    content.contentData.forEach((data) => {
      let data_style = "mb-4 "
      if (data.depth === 1) {
        data_style += "ml-4"
      } else if (data.depth === 2) {
        data_style += "ml-8"
      } else if (data.depth >= 3) {
        data_style += "ml-12"
      }

      switch (data.type) {
        case "text":
          slideContents.push(
            <li className={ data_style }>{ data.data }</li>
          )
          break
        
        case "image":
          slideContents.push(
            <li className={ data_style }>
              <Image src={ data.data } alt="" layout="responsive" width={data.width ?? 100} height={data.height ?? 100} />
            </li>
          )
          break
      }
    })
  }

  return (
    <div>
      {content.type === "scrapbox" &&
        <h1 className="text-4xl font-bold">
          {content.shortContent.type = "text" &&
            content.shortContent.content
          }
        </h1>
      }
      <ul className="ml-4 text-3xl my-4">{ slideContents }</ul>
    </div>
  )
}

export default PresentationContentTemplate
