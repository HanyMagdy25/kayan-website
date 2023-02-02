import AboutArea from "../../components/AboutArea/AboutArea";
import HeroCarousel from "../../components/Carousel/HeroCarousel";
import Features from "../../components/Features/Features";
import LatestWork from "../../components/LatestWork/LatestWork";
import UsersRateSection from "../../components/UsersRateSection/UsersRateSection";
import WeDo from "../../components/WeDo/WeDo";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <AboutArea />
      <Features />
      <UsersRateSection />
      <LatestWork />
    </div>
  );
};

export default Home;
