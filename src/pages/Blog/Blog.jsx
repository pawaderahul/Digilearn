import Title from "../../shared-components/Title/Title";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Blog.scss";
import BlogCard from "../../shared-components/Blog-Card/BlogCard";

const data = [
  {
    id: 0,
    imageUrl: "/assets/images/article-1.jpg",
    user: "Tom Kennedy",
    date: "Feb 23, 2024",
    title: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 1,
    imageUrl: "/assets/images/article-2.jpg",
    user: "Tom Kennedy",
    date: "Feb 23, 2024",
    title: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    imageUrl: "/assets/images/article-3.jpg",
    user: "Tom Kennedy",
    date: "Feb 23, 2024",
    title: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <Title title={"Blog"} />
      <h1>Browse articles</h1>
      <section className="card-container">
        {data.map((d) => {
          return <BlogCard key={d.id} data={d} />;
        })}
      </section>
      <button className="btn">
        View all
        <FaArrowRightLong />
      </button>
    </section>
  );
};

export default Blog;
