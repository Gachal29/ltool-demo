"use client"
import PresentationCtlFooter from "components/footers/PresentationCtlFooter"
import PresentationCtlHeader from "components/headers/PresentationCtlHeader"
import PresentationThemeSelect from "components/controller/PresentationThemeSelect"
import { NextPage } from "next"
import { useState } from "react"
import { Material } from "models/material"
import PresentationThemeTemplate from "components/controller/PresentationThemeTemplate"


const PresentationController: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [presentationTheme, setPresentationTheme] = useState<string>("")

  const material = new Material()

  return (
    <>
      <PresentationCtlHeader
        currentPage={ currentPage }
        presentationTheme={ presentationTheme } />
      <main className="mt-8 mb-16 mx-4">
        {!presentationTheme && currentPage === 1 &&
          <PresentationThemeSelect setPresentationTheme={ setPresentationTheme } />
        }
        {presentationTheme && currentPage === 1 &&
          <PresentationThemeTemplate presentationTheme={ presentationTheme } />
        }
      </main>
      <PresentationCtlFooter
        presentationTheme={ presentationTheme }
        currentPage={ currentPage }
        materialPageNum={ material.materialPageNum() }
        setCurrentPage={ setCurrentPage } />
    </>
  )
}

export default PresentationController
