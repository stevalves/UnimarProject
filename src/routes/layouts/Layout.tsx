import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import ScrollToTop from "../../utils/ScrollToTop";
import UnimarHeader from "../../components/Header/UnimarHeader";

const Layout = () => {
  return (
    <ScrollToTop>
      <UnimarHeader />
      <Outlet />
      <Footer className="relative"/>
    </ScrollToTop>
  );
};

export default Layout;
