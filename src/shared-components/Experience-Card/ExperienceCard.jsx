import "./ExperienceCard.scss";
import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";

const ExperienceCard = (props) => {
  const { image, title, subtitle } = props;
  return (
    <section className="experience-card">
      <img src={"/assets/icons/" + image + ".svg"} alt="image" />
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <a href="" className="link">
        Learn more <FaArrowRightLong />
      </a>
    </section>
  );
};

ExperienceCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ExperienceCard;
