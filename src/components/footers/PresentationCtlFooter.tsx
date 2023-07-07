import { NextPage } from "next"
import { Dispatch, SetStateAction } from "react"


type Props = {
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const PresentationCtlFooter: NextPage<Props> = ({ currentPage, setCurrentPage }) => {
  const handlePageNext = () => { setCurrentPage(currentPage + 1) }
  const handlePagePrevious = () => { setCurrentPage(currentPage - 1) }
  
  return (
    <footer className="navbar fixed bottom-0">
      <div className="navbar-start text-xl">
        { currentPage }
      </div>

      <div className="navbar-center btn-group">
        <button
          className="btn btn-outline btn-primary-focus w-28"
          disabled={ currentPage === 1 ? true : false }
          onClick={ handlePagePrevious }
        >前へ</button>

        <button
          className="btn btn-outline btn-primary-focus w-28"
          disabled={ false }
          onClick={ handlePageNext }
        >次へ</button>
      </div>
      <div className="navbar-end">
      </div>
    </footer>
  )
}

export default PresentationCtlFooter
