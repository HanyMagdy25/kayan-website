import HeroCarousel from "../../components/Carousel/HeroCarousel";
import "./About.css";
import AboutCard from "../../components/AboutCard/AboutCard";
const About = () => {
  return (
    <div>
      {/* <HeroCarousel /> */}
      <div className="about-content">
        <div className="container">
          <div className="row about-content__allCards">
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
