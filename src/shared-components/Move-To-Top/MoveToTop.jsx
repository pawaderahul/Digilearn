import { useState } from "react";
import "./MoveToTop.scss";
import { FaArrowUp } from "react-icons/fa";

const MoveToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) setVisible(true);
    else if (scrolled <= 300) setVisible(false);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    visible && (
      <section className="move-to-top">
        <button onClick={() => handleMoveToTop()}>
          <figure>
            <FaArrowUp />
          </figure>
        </button>
      </section>
    )
  );
};

export default MoveToTop;
