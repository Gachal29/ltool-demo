"use client"

import { NextPage } from "next"
import Image from "next/image"
import StartIcon from "@/icons/presentation-start.svg"


const PresentationStart: NextPage = () => {
  const handleStartPresentation = () => {
    window.location.href = "/presentation-ctl"
  }

  return (
    <button className="fixed bottom-2 right-4 w-16" onClick={ handleStartPresentation }>
      <Image src={ StartIcon } alt="" />
    </button>
  )
}

export default PresentationStart
