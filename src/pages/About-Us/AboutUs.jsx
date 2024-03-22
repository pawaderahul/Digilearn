import Title from "../../shared-components/Title/Title";
import "./AboutUs.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const stats = [
  {
    title: "Years of experience",
    stat: "15",
    suffix: "+",
  },
  {
    title: "Students worldwide",
    stat: "100",
    suffix: "k",
  },
  {
    title: "Class subjects",
    stat: "45",
    suffix: "+",
  },
  {
    title: "Student satisfactions",
    stat: "98",
    suffix: "%",
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <section className="primary-container">
        <figure className="img-container">
          <img src="/assets/images/aboutUs.jpg" alt="about us" />
        </figure>
        <section className="data-container">
          <Title title={"About us"} />
          <h1>E-Learning Platform for Digital Skills</h1>
          <p>
            Empower yourself with the knowledge and skills gained through online
            education! The key to your future! Empower yourself with the
            knowledge and skills gained through online education! The key to
            your future!
          </p>
          <button className="btn">
            Learn more <FaArrowRightLong />
          </button>
        </section>
      </section>
      <section className="secondary-container">
        {stats.map((s, i) => {
          return (
            <section className="stat-box" key={i}>
              <h1>
                {s.stat}
                <span>{s.suffix}</span>
              </h1>
              <p>{s.title}</p>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default AboutUs;
