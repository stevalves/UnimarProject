import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import ScrollToTop from "../../utils/ScrollToTop";
import UniTalkHeader from "../../components/Header/UniTalkHeader";
import { AuthProvider } from "../../providers/AuthProvider";
import { JobProvider } from "../../providers/JobProvider";

const UniTalkLayout = () => {
  return (
    <ScrollToTop>
      <AuthProvider>
        <JobProvider>
          <UniTalkHeader />
          <Outlet />
          <Footer />
        </JobProvider>
      </AuthProvider>
    </ScrollToTop>
  );
};

export default UniTalkLayout;
