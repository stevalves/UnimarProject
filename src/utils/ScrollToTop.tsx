import { useEffect } from "react";
import { useLocation, Location } from "react-router";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const location: Location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
