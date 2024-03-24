import CourseCard from "../../shared-components/Course-Card/CourseCard";
import Title from "../../shared-components/Title/Title";
import "./OurClass.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { classes } from "./data";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const OurClass = () => {
  const [activeClass, setActiveClass] = useState(0);
  const [courseData, setCourseData] = useState(classes[0].data);

  const setClass = (classId) => {
    setActiveClass(classId);
    setCourseData(classes[classId].data);
  };

  return (
    <section id="our-class" className="our-class">
      <Title title={"Our Class"} />
      <h1>Best selling class</h1>
      <section className="switch-wrapper-desktop">
        {classes.map((c) => {
          return (
            <button
              key={c.id}
              onClick={() => setClass(c.id)}
              className={
                "switch-option" + (activeClass === c.id ? " active" : "")
              }
            >
              {c.class}
            </button>
          );
        })}
      </section>
      <section className="switch-wrapper-mobile">
        <Dropdown>
          <Dropdown.Toggle>{classes[activeClass].class}</Dropdown.Toggle>
          <Dropdown.Menu>
            {classes.map((c) => {
              return (
                <Dropdown.Item
                  key={c.id}
                  active={activeClass === c.id}
                  onClick={() => setClass(c.id)}
                >
                  {c.class}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </section>
      <section className="switch-content">
        {courseData.map((d) => {
          return <CourseCard key={d.id} data={d} />;
        })}
      </section>
      <button className="btn">
        View all class
        <FaArrowRightLong />
      </button>
    </section>
  );
};

export default OurClass;
