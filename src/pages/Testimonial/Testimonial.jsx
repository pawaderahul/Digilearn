import TestimonialCard from "../../shared-components/Testimonial-card/TestimonialCard";
import Title from "../../shared-components/Title/Title";
import "./Testimonial.scss";

const data = [
  {
    id: 0,
    imageUrl: "/assets/images/student-1.jpg",
    name: "Michael Wong",
    occupation: "UI/UX Design Student",
    rating: "4.9",
    description:
      "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
  },
  {
    id: 1,
    imageUrl: "/assets/images/student-2.jpg",
    name: "Avril Song",
    occupation: "Web Development Student",
    rating: "4.8",
    description:
      "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
  },
  {
    id: 2,
    imageUrl: "/assets/images/student-3.jpg",
    name: "Jeane Wood",
    occupation: "Data Science Student",
    rating: "5.0",
    description:
      "Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <Title title={"Testimonial"} />
      <h1>Student Testimonial</h1>
      <section className="card-container">
        {data.map((d) => {
          return <TestimonialCard key={d.id} data={d} />;
        })}
      </section>
    </section>
  );
};

export default Testimonial;
