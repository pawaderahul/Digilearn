import Home from "./pages/Home/Home";
import Nav from "./Layout/Nav/Nav";
import WhyChooseUse from "./pages/Why-Choose-Us/WhyChooseUse";
import AboutUs from "./pages/About-Us/AboutUs";
import MoveToTop from "./shared-components/Move-To-Top/MoveToTop";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <WhyChooseUse />
      <AboutUs />

      <MoveToTop />
    </>
  );
};

export default App;
