import { Carousel } from "react-responsive-carousel";
import { coursesIn, coursesOut, iCourse } from "../../../data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import CourseModal from "../../components/Modals/CourseModal";

const CourseCard = ({ course }: { course: iCourse }) => {

  const [seeModal, setSeeModal] = useState(false)

  const toggleModal = () => setSeeModal(!seeModal)

  const { name, photo } = course;

  return (
    <>
      <div className="bg-white relative">
        <img src={photo} alt={name + " cover image"} className="w-[calc(100% - 20px)] mx-auto px-10 h-[140px] md:h-[320px] object-cover bg-[center_center]" />
        <button
          onClick={toggleModal}
          className="absolute w-full top-0 bottom-0 bg-black/60 hover:bg-black/30 transition-colors duration-300 text-white flex items-center pt-4 flex-col"
        >
          <h4 className="md:text-xl font-semibold px-2 md:py-1 text-forest-50">{name}</h4>
        </button>
      </div>
      {seeModal && <CourseModal course={course} toggleModal={toggleModal} />}
    </>
  );
};

const CoursesList = () => {

  const [list, setList] = useState<iCourse[]>(coursesIn)

  return (
    <section className="bg-forest-600 p-8 flex flex-col justify-between">
      <div className="h-full container mx-auto flex flex-col gap-4">
        <div className="pb-2 text-forest-50 flex justify-between">
          <h3 className="text-2xl">Nossos cursos</h3>
          <ul className="flex text-forest-800 gap-4">
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="presencial"
                name="courseType"
                id="presencial"
                onChange={() => setList(coursesIn)}
                defaultChecked
              />
              <label
                className="flex px-1 md:px-4 py-2 bg-transparent text-forest-50 font-semibold border-2 border-forest-50 rounded cursor-pointer focus:outline-none hover:bg-forest-100/20 transition-colors duration-300 peer-checked:border-forest-800 peer-checked:bg-forest-100 peer-checked:text-forest-800"
                htmlFor="presencial"
              >
                Presencial
              </label>
            </li>
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="ead"
                name="courseType"
                id="ead"
                onChange={() => setList(coursesOut)}
              />
              <label
                className="flex px-4 py-2 bg-transparent text-forest-50 font-semibold border-2 border-forest-50 rounded cursor-pointer focus:outline-none hover:bg-forest-100/20 transition-colors duration-300 peer-checked:border-forest-800 peer-checked:bg-forest-100 peer-checked:text-forest-800"
                htmlFor="ead"
              >
                EAD
              </label>
            </li>
          </ul>
        </div>
        <Carousel
          showArrows
          autoPlay
          centerMode
          showIndicators={false}
          showStatus={false}
          transitionTime={800}
          interval={6000}
          showThumbs={false}
          infiniteLoop
          className="rounded-xl overflow-hidden"
        >
          {list.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CoursesList;
