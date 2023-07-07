"use client"
import PresentationCtlFooter from "components/footers/PresentationCtlFooter"
import PresentationCtlHeader from "components/headers/PresentationCtlHeader"
import { NextPage } from "next"
import { useState } from "react"


const PresentationController: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [presentationTheme, setPresentationTheme] = useState<string>("")
  const handlePresentationTheme = (selectPresentationTheme: string) => {
    setPresentationTheme(selectPresentationTheme)
  }

  return (
    <>
      <PresentationCtlHeader presentationTheme={ presentationTheme } />
      <main></main>
      <PresentationCtlFooter currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
    </>
  )
}

export default PresentationController
