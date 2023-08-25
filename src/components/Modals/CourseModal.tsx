import { iCourse } from "../../../data"
import { Modal } from "../Modal"

const CourseModal = ({course, toggleModal}: {course: iCourse, toggleModal: () => void}) => {

  return (
    <Modal toggleModal={toggleModal}>
      <h1>{course.name} - ({course.type})</h1>
    </Modal>
  )
}

export default CourseModal