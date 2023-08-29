import { Outlet, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Homepage from "../pages/Homepage/Homepage";
import Dashboard from "../pages/Ead/Ead";
import Footer from "../components/Footer";
import Me from "../pages/Me/Me";
import ScrollToTop from "../utils/ScrollToTop";
import UniTalk from "../pages/UniTalk/UniTalk";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Logo";
import unitalk from "../assets/unitalk-onlydraw1.png";

const UniTalkLayout = () => {
  return (
    <ScrollToTop>
      <Header>
        <Link to="/unitalk" className="flex items-center gap-2 md:w-max w-12">
          <img src={unitalk} alt="UniTalk logo" />
          <h1 className="font-logo md:text-5xl text-2xl">UniTalk</h1>
        </Link>
        <div className="flex border-l border-forest-50 pl-4 text-2xl font-logo gap-2">
          <Link to="unitalk/register" className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors">Registro</Link>
          <Link to="unitalk/login" className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors">Login</Link>
        </div>
      </Header>
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};

const Layout = () => {
  return (
    <ScrollToTop>
      <Header>
        <Link to="/">
          <Logo />
        </Link>
        <NavBar />
      </Header>
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/me" element={<Me />} />
      </Route>
      <Route path="/unitalk" element={<UniTalkLayout />}>
        <Route path="" element={<UniTalk />} />
      </Route>
    </Routes>
  );
}

export default Router;
