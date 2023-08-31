import { iCourse } from "../../../../data";
import { Modal } from "..";
import { BiLinkExternal } from "react-icons/bi";

const CourseModal = ({
  course,
  toggleModal,
}: {
  course: iCourse;
  toggleModal: () => void;
}) => {
  return (
    <Modal toggleModal={toggleModal} title={course.name}>
      <div className="p-2 text-forest-800">
        <img
          src={course.photo}
          alt={course.name}
          className="w-5/6 mx-auto rounded"
        />
        <h3 className="text-center py-2 font-semibold">
          {course.type} - {course.certificate}
        </h3>
        <p className="leading-5">{course.desc}</p>
        <a
          target="_blank"
          href={course.url}
          className="p-2 border border-forest-900 text-forest-900 bg-forest-200/80 transition-colors duration-300 hover:bg-forest-200 flex w-max gap-2 rounded mx-auto my-2 items-center"
        >
          Saiba mais
          <BiLinkExternal />
        </a>
      </div>
    </Modal>
  );
};

export default CourseModal;
