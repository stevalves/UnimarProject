import { Outlet, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Homepage from "../pages/Homepage/Homepage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Footer from "../components/Footer";
import Me from "../pages/Me/Me";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/me" element={<Me />} />
      </Route>
    </Routes>
  );
}

export default Router;
