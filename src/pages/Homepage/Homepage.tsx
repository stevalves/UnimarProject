import { AboutUs, CoursesList, InitialHome } from "."

const Homepage = () => {
  return (
    <main className="bg-unimar bg-center bg-cover bg-no-repeat bg-fixed object-cover">
      <InitialHome />
      <CoursesList />
      <AboutUs />
    </main>

  )
}

export default Homepage