import { useParams } from "react-router-dom";
import { projectsData } from "../../utils/data";
import "./ProjectInside.css";

const ProjectInside = () => {
  const param = useParams();
  const oneProject = projectsData.find((a) => a.id === parseInt(param.id));

  console.log(oneProject);
  return (
    <div className="projectInside">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="wpo-project-single-wrap">
              <div className="projectInside__item">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="projectInside-title">
                      <h3>Architecture Project</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Metus dis posuere amet tincidunt commodo, velit. Ipsum,
                      hac nibh fermentum nisi, platea condimentum cursus velit
                      dui. Massa volutpat odio facilisis purus sit elementum.
                      Non, sed velit dictum quam. Id risus pharetra est, at
                      rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                      sollicitudin diam, elit sit. Et nisi in libero facilisis
                      sed est. Elit curabitur amet risus bibendum. Posuere et
                      eget orci, tempor enim.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <div className="projectInside-right">
                      <ul>
                        <li>
                          Location : <span>7 Lake Street,London</span>
                        </li>
                        <li>
                        Client  : <span>wpOceans</span>
                        </li>
                        <li>
                        Architect  : <span>Harry Johnson</span>
                        </li>
                        <li>
                          Location : <span>7 Lake Street,London</span>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInside;
