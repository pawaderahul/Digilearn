import ExperienceCard from "../../shared-components/Experience-Card/ExperienceCard";
import Title from "../../shared-components/Title/Title";
import "./WhyChooseUse.scss";

const experienceData = [
  {
    image: "Person",
    title: "Expert Instructor",
    subtitle: "Empower yourself with the knowledge and skills gained...",
  },
  {
    image: "MonitorPlay",
    title: "Interactive Learning",
    subtitle: "Empower yourself with the knowledge and skills gained...",
  },
  {
    image: "LockKeyOpen",
    title: "Lifetime Access",
    subtitle: "Empower yourself with the knowledge and skills gained...",
  },
  {
    image: "Certificate",
    title: "Verified Certificate",
    subtitle: "Empower yourself with the knowledge and skills gained...",
  },
];

const WhyChooseUse = () => {
  return (
    <section className="why-choose-us">
      <section className="primary-container">
        <Title title={"Why choose us"} />
        <p>Best Learning Experience</p>
      </section>
      <section className="secondary-container">
        {experienceData.map((e, i) => {
          return (
            <ExperienceCard
              key={i}
              image={e.image}
              title={e.title}
              subtitle={e.subtitle}
            />
          );
        })}
      </section>
    </section>
  );
};

export default WhyChooseUse;
