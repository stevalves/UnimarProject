import Aos from "aos";
import { useEffect } from "react";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";

import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Router />
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
}

export default App;
