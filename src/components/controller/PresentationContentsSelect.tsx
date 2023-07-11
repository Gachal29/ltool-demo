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
  }

  const contentElems: any = []
  PresentationContentChoices.forEach((contentChoice: Content, index: number) => {
    contentElems.push(
      <li
        key={ index }
        className="w-64 h-24 mx-2 bg-base-100 shadow-md btn btn-outline"
        onClick={() => handleSetMaterialContent(contentChoice) }>
        <span className="card-body text-xl">
          { contentChoice.shortContent.content }
        </span>
      </li>
    )
  }, { index: 1 })  
  
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl mt-2 mb-6">{currentPage}ページ目の内容を選択</h1>
      <div>
        <ul className="flex">{ contentElems }</ul>
      </div>
    </div>
  )
}

export default PresentationContentsSelect
