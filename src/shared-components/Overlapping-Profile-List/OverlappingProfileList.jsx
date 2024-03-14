import "./OverlappingProfileList.scss";
import PropTypes from "prop-types";

const OverlappingProfileList = (props) => {
  const { profiles, remainingProfiles } = props;
  
  return (
    <section className="profiles-container">
      {profiles.map((profile, i) => {
        return (
          <section className="profile" style={{ left: 0 + i * 40 }} key={i}>
            <img src={`./assets/images/` + profile} alt="profile" />
          </section>
        );
      })}

      <section className="profile tail" style={{ left: profiles.length * 40 }}>
        <p>{remainingProfiles + "+"}</p>
      </section>
    </section>
  );
};

OverlappingProfileList.propTypes = {
  profiles: PropTypes.array,
  remainingProfiles: PropTypes.string,
};

export default OverlappingProfileList;
