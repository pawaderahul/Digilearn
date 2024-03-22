import { Button } from "react-bootstrap";
import CertifiedInstructor from "../../shared-components/Certified-Instructor/CertifiedInstructor";
import "./Home.scss";
import OverlappingProfileList from "../../shared-components/Overlapping-Profile-List/OverlappingProfileList";

const profileList = [
  `profileEllipse-3.png`,
  `profileEllipse-4.png`,
  `profileEllipse-5.png`,
  `profileEllipse-6.png`,
];

const brandList = [`Google.png`, `Amazon.png`, `Canva.png`, `Sketch.png`];

const Home = () => {
  return (
    <section id="home" className="home">
      <h1 className="title">
        Master Digital Skills
        <br /> with Ease!
      </h1>
      <h2 className="subtitle">
        Unlock Digital Mastery Effortlessly! Explore and enhance your
        <br /> skills with our user-friendly platform.
      </h2>
      <section className="students-box">
        <h2>Total students</h2>
        <OverlappingProfileList
          profiles={profileList}
          remainingProfiles="900"
        />
      </section>
      <section className="btn-container">
        <Button>Start learning</Button>
        <Button>Learn more</Button>
      </section>
      <section className="brands-container">
        <h2>Trusted by</h2>
        <section className="brands-list">
          {brandList.map((brand, i) => {
            return (
              <section className="brand" key={i}>
                <img src={"/assets/logo/" + brand} alt={brand} />
              </section>
            );
          })}
        </section>
      </section>
      <section className="absolute-container">
        <img src="/assets/images/lady.jpg" alt="lady" />
        <div className="instructor-card">
          <CertifiedInstructor />
        </div>
      </section>
    </section>
  );
};

export default Home;
