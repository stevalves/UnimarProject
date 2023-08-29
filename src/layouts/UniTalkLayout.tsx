import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../utils/ScrollToTop";
import UniTalkHeader from "../pages/UniTalk/UniTalkHeader";

const UniTalkLayout = () => {
  return (
    <ScrollToTop>
      <UniTalkHeader />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};

export default UniTalkLayout