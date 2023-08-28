import { useEffect } from "react";
import { AboutUs, CoursesList, InitialHome } from ".";

const Homepage = () => {
  useEffect(() => {
    document.title = "Unimar";
  }, []);

  return (
    <main className="relative">
      <div className="fixed inset-0 bg-cover bg-center bg-unimar" />
      <div className="relative z-10">
        <InitialHome />
        <CoursesList />
        <AboutUs />
      </div>
    </main>
  );
};

export default Homepage;
