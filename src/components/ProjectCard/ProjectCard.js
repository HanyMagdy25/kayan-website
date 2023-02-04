import { Link } from "react-router-dom";
import "./ProjectCard.css";
// import projectImage from "../../assets/bg3.png";
const ProjectCard = ({ item }) => {
  return (
    <div className="grid col-12 col-md-6 col-lg-4 p-2">
      <div className="projectCard__item">
        <div className="projectCard__item__img">
          <img src={item?.image[0]} alt="project" loading="lazy" />
          <div className="left-border"></div>
          <div className="right-border"></div>
        </div>
        <div className="projectCard__item__title">
          <h2>
            <Link to={`/project/${item.id}`}>{item.title}</Link>
          </h2>
          <span>{item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
