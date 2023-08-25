import { Outlet, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import Homepage from "../pages/Homepage/Homepage"
import Ead from "../pages/Ead/Ead"

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
        <Route path="/" element={<Homepage />} />
        <Route path="/ead" element={<Ead />} />
      </Route>
    </Routes>
  )
}

export default Router