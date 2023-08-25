import { useEffect } from "react"
import Router from "./routes/Router"
import "aos/dist/aos.css"
import Aos from "aos"

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  }, [])

  return (
    <>
      <Router />
    </>
  )
}

export default App
