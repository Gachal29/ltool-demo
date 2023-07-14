import { NextPage } from "next"
import { Dispatch, SetStateAction } from "react"
import { PresentationThemeChoices } from "consts/contentChoices"

type Props = {
  setPresentationTheme: Dispatch<SetStateAction<string>>
}

const PresentationThemeSelect: NextPage<Props> = ({ setPresentationTheme }) => {
  const choicesElems: any = []

  PresentationThemeChoices.forEach((presentationThemeChoice, index) => {
    choicesElems.push(
      <li key={ index }
        className="btn btn-lg btn-outline w-full lg:text-4xl btn-lg my-4 break-all"
        onClick={() => setPresentationTheme(presentationThemeChoice)}>
        { presentationThemeChoice }
      </li>
    )
  })

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl mt-2 mb-6">プレゼンテーションテーマを選択</h1>
      <div>
        <ul>{ choicesElems }</ul>
      </div>
    </div>
  )
}

export default PresentationThemeSelect
