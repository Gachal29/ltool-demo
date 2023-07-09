import { NextPage } from "next"
import { Dispatch, SetStateAction } from "react"


type Props = {
  presentationTheme?: string
  materialPageNum: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const PresentationCtlFooter: NextPage<Props> = (
  { presentationTheme, materialPageNum, currentPage, setCurrentPage }) => {
  return (
    <footer className="navbar fixed bottom-0 bg-base-100 border-t border-gray-500">
      <div className="navbar-start text-xl">
        { currentPage }
      </div>

      <div className="navbar-center btn-group">
        <button
          className="btn btn-outline btn-primary-focus w-28"
          disabled={ currentPage === 1 ? true : false }
          onClick={ () => setCurrentPage(currentPage-1) }
        >前へ</button>

        <button
          className="btn btn-outline btn-primary-focus w-28"
          disabled={ currentPage-1 === materialPageNum || !presentationTheme ? true : false }
          onClick={ () => setCurrentPage(currentPage+1) }
        >次へ</button>
      </div>
      <div className="navbar-end">
      </div>
    </footer>
  )
}

export default PresentationCtlFooter
