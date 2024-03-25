import "./BlogCard.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";

const BlogCard = (props) => {
  const { data } = props;
  return (
    <section className="blog-card">
      <figure className="img-container">
        <img src={data.imageUrl} alt="blog image" />
      </figure>
      <section className="data-container">
        <section className="flex-container">
          <figure>
            <img src="/assets/icons/User.svg" alt="user" />
            <figcaption>{data.user}</figcaption>
          </figure>
          <figure>
            <img src="/assets/icons/Calendar.svg" alt="user" />
            <figcaption>{data.date}</figcaption>
          </figure>
        </section>
        <p>{data.title}</p>
        <button>
          Read more
          <FaArrowRightLong />
        </button>
      </section>
    </section>
  );
};

BlogCard.propTypes = { data: PropTypes.object };

export default BlogCard;
