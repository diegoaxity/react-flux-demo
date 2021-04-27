import { useEffect, useState } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses().then(() => {
        setCourse(courseStore.getCourseBySlug(slug));
      });
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) {
      return;
    }
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved");
    });
  };

  const formIsValid = () => {
    const err = {};

    if (!course.title) err.title = "Title is required";
    if (!course.authorId) err.authorId = "Author is required";
    if (!course.category) err.category = "Category is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
