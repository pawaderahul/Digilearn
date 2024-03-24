import { Figure } from "react-bootstrap";
import { FaRegFileAlt } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import "./CourseCard.scss";
import PropTypes from "prop-types";

const CourseCard = (props) => {
  const { data } = props;
  return (
    <section className="course-card">
      <Figure className="image-wrapper">
        <Figure.Image
          width={302}
          height={240}
          alt="302x240"
          src={data.imageUrl}
        />
      </Figure>
      <section className="content">
        <h1>{data.title}</h1>
        <section className="primary-stats-container">
          <section className="stat">
            <FaRegFileAlt />
            <p>{data.lessonCount} Lesson</p>
          </section>
          <section className="stat">
            <LuClock3 />
            <p>{data.weekCount} Week</p>
          </section>
        </section>
        <section className="secondary-stats-container">
          <section className="stat">
            <p>${data.price}</p>
          </section>
          <section className="stat">
            <img src="/assets/icons/Star.svg" alt="Rating" />
            <p>{data.rating}</p>
          </section>
        </section>
      </section>
    </section>
  );
};

CourseCard.propTypes = {
  data: PropTypes.object,
};

export default CourseCard;
