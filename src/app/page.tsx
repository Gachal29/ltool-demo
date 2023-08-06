"use client"

import PresentationStart from "components/PresentationStart"
import { NextPage } from "next"
import Image from "next/image"
import GeneralView from "@/site-materials/general-view.png"
import RightArrow from "@/site-materials/right-arrow.png"
import { useWindowSize } from "utils/useWindowSize"


const Home: NextPage = () => {
  const windowSize = useWindowSize()

  return (
    <main>
      <h1 className="ml-2 text-4xl font-bold">LTooL</h1>
      <div className="my-2 mx-4">
        <h2 className="text-4xl text-center mb-2">
          <u>LTooLとは</u>
        </h2>
        <div className="w-full text-xl">
          <p className="text-3xl my-4">資料を作りながら話すプレゼンテーションツール</p>
          <Image
            className="mx-auto"
            src={GeneralView}
            alt="概要図"
            width={windowSize.width/2} />
        </div>
      </div>

      <div className="fixed bottom-6 right-24 flex items-center">
        <p className="font-bold text-2xl mr-4">ここからプレゼンテーションを体験してください</p>
        <Image src={RightArrow} alt="" width={50} />
      </div>

      <PresentationStart />
    </main>
  )
}

export default Home
