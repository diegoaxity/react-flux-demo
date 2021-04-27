import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import courseStore from "../stores/courseStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { toast } from "react-toastify";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      loadCourses();
    }
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  const handleDelete = (id) => {
    deleteCourse(id).then(() => toast.error("Course Deleted"));
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add
      </Link>
      <CourseList courses={courses} deleteCourse={handleDelete} />
    </>
  );
}

export default CoursesPage;
