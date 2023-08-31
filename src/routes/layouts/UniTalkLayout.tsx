import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import ScrollToTop from "../../utils/ScrollToTop";
import UniTalkHeader from "../../components/Header/UniTalkHeader";
import { AuthProvider } from "../../providers/AuthProvider";

const UniTalkLayout = () => {
  return (
    <ScrollToTop>
      <AuthProvider>
        <UniTalkHeader />
        <Outlet />
        <Footer />
      </AuthProvider>
    </ScrollToTop>
  );
};

export default UniTalkLayout;
