import "./CertifiedInstructor.scss";
import PropTypes from "prop-types";

const CertifiedInstructor = () => {
  return (
    <section className="certified-instructor">
      <h2>Certified Instructor</h2>
      <section className="instructors-box">
        <UserDetails
          name="Donald Robert"
          profile="UI/UX Design"
          img="profileEllipse-1"
        />
        <UserDetails
          name="John White"
          profile="Web Development"
          img="profileEllipse-2"
        />
      </section>
    </section>
  );
};

export default CertifiedInstructor;

export const UserDetails = (props) => {
  const { name, profile, img } = props;
  return (
    <section className="main">
      <figure className="img-box">
        <img src={"/assets/images/" + img + ".png"} alt="user profile" />
      </figure>
      <section className="detail-box">
        <h3>{name}</h3>
        <p>{profile}</p>
      </section>
    </section>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string,
  profile: PropTypes.string,
  img: PropTypes.string,
};
