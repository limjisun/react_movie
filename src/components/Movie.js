import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../css/Movie.module.css";
function Movie({ id ,coverImg, title, year }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie">
        <img src={coverImg} alt={title} />
        <h2 className={`${style.title}`}>
          {title}
        </h2>
        <span className={`${style.year}`}>{year}</span>
      </div>
      </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;