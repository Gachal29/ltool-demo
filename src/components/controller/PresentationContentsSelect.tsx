import { NextPage } from "next"
import { PresentationContentChoices } from "consts/contentChoices"
import { Dispatch, SetStateAction } from "react"
import { Content, Material } from "model/material"


type Props = {
  material: Material
  setMaterial: Dispatch<SetStateAction<Material>>
  currentPage: number
}

const PresentationContentsSelect: NextPage<Props> = ({ material, setMaterial, currentPage }) => {
  const handleSetMaterialContent = (content: Content): void => {
    const materialTmp: Material = material
    materialTmp.contents.push(content)
    setMaterial(materialTmp)
    // console.log("test")
  }

  const contentElems: any = []
  PresentationContentChoices.forEach((contentChoice: Content, index: number) => {
    switch (contentChoice.type) {
      case "speacker_interview":
        break
      
      case "scrapbox":
        switch (contentChoice.shortContent.type) {
          case "text":
            // テキストの選択カードを作成
            contentElems.push(
              <li key={ index }
                className="h-24 w-64 mx-2 btn btn-outline break-all text-xl"
                onClick={() => handleSetMaterialContent(contentChoice)}
              >{ contentChoice.shortContent.content }</li>
            )
            break
        }
        break
    }
  })
  
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl mt-2 mb-6">{currentPage}ページ目の内容を選択</h1>
      <ul className="flex">{ contentElems }</ul>
    </div>
  )
}

export default PresentationContentsSelect
