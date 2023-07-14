"use client"
import PresentationCtlFooter from "components/footers/PresentationCtlFooter"
import PresentationCtlHeader from "components/headers/PresentationCtlHeader"
import PresentationThemeSelect from "components/controller/PresentationThemeSelect"
import { NextPage } from "next"
import { useState } from "react"
import PresentationThemeTemplate from "components/controller/PresentationThemeTemplate"
import PresentationContentsSelect from "components/controller/PresentationContentsSelect"
import { Material } from "model/material"


const PresentationController: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [presentationTheme, setPresentationTheme] = useState<string>("")
  const [material, setMaterial] = useState<Material>({contents: []})

  const getMaterialPageNum = (): number => {
    const pageNum = material.contents.length
    return pageNum + 1
  }

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
        {currentPage > 1 && currentPage-1 === getMaterialPageNum() &&
          <PresentationContentsSelect
            material={ material }
            setMaterial={ setMaterial }
            currentPage={ currentPage } />
        }
        {currentPage > 1 && currentPage === getMaterialPageNum() &&
          <div>{ material.contents[currentPage-1].shortContent.content }</div>
        }
      </main>
      <PresentationCtlFooter
        presentationTheme={ presentationTheme }
        currentPage={ currentPage }
        materialPageNum={ getMaterialPageNum() }
        setCurrentPage={ setCurrentPage } />
    </>
  )
}

export default PresentationController
