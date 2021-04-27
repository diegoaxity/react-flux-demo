import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((x) => {
          return (
            <tr key={x.id}>
              <td>
                <Link to={"course/" + x.slug}>{x.title}</Link>
              </td>
              <td>{x.authorId}</td>
              <td>{x.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    props.deleteCourse(x.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
