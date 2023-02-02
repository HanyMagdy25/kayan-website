import HeroCarousel from "../../components/Carousel/HeroCarousel";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectHero from "../../components/ProjectHero/ProjectHero";
import { projectsData } from "../../utils/data";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      {/* <HeroCarousel /> */}
      <div className="projects">
        {/* <ProjectHero/> */}
        <div className="container">
          <div className="row">
            <div className="projects__section-title">
              <h2>Our Projects</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac enim
                aliquam feugiat ullamcorper. Id risus mattis neque, ullamcorper.
                Sed sit commodo vestibulum cras in cras. Nec proin scelerisque
                quis nisl vitae, egestas non. Fringilla auctor.
              </p>
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-12 d-flex">
                <div className="project-grids gallery-container clearfix">
                  {projectsData.map((item, index) => (
                    <ProjectCard item={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
