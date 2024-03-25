import Home from "./pages/Home/Home";
import Nav from "./Layout/Nav/Nav";
import WhyChooseUs from "./pages/Why-Choose-Us/WhyChooseUs";
import AboutUs from "./pages/About-Us/AboutUs";
import MoveToTop from "./shared-components/Move-To-Top/MoveToTop";
import OurClass from "./pages/Our-Class/OurClass";
import Testimonial from "./pages/Testimonial/Testimonial";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <WhyChooseUs />
      <AboutUs />
      <OurClass />
      <Testimonial />
      <Blog/>

      <MoveToTop />
    </>
  );
};

export default App;
