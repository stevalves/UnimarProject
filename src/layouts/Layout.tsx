import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Logo";
import ScrollToTop from "../utils/ScrollToTop";

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

export default Layout