import PresentationStart from "components/PresentationStart"
import { NextPage } from "next"


const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold">LTooL</h1>
      <div className="my-2 mx-4">
        <h2 className="text-2xl text-center mb-2">
          <u>LTooLとは</u>
        </h2>
        <span className="w-full text-xl">
          LTooLの説明
        </span>
      </div>

      <PresentationStart />
    </main>
  )
}

export default Home
