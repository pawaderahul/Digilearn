import PropTypes from "prop-types";
import "./Title.scss";

const Title = ({ title }) => {
  return (
    <section className="flex-container">
      <div className="horizontal-line"></div>
      <h1>{title}</h1>
    </section>
  );
};

Title.propTypes = { title: PropTypes.string };

export default Title;
