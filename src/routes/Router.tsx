import { Outlet, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import Homepage from "../pages/Homepage"

const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
  }
  
  function Router() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />}/>
        </Route>
      </Routes>
    )
  }
  
  export default Router