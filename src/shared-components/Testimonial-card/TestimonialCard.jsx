import "./TestimonialCard.scss";
import PropTypes from "prop-types";

const TestimonialCard = (props) => {
  const { data } = props;
  return (
    <section className="testimonial-card">
      <section className="primary-container">
        <img className="profile-pic" src={data.imageUrl} alt="profile" />
        <section className="details">
          <h1 className="name">{data.name}</h1>
          <p className="occupation">{data.occupation}</p>
          <figure>
            <img src="/assets/icons/Star.svg" alt="rating" />
            <figcaption>{data.rating}</figcaption>
          </figure>
        </section>
      </section>
      <section className="secondary-container">
        <p>{data.description}</p>
      </section>
    </section>
  );
};

TestimonialCard.propTypes = { data: PropTypes.object };

export default TestimonialCard;
