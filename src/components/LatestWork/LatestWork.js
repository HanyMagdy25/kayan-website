import "./LatestWork.css";
import vectorIamge1 from "../../assets/vector1.png";
import vectorIamge2 from "../../assets/vector2.png";
import itemIamge1 from "../../assets/item1.png";
import itemIamge2 from "../../assets/item2.png";
import { Link } from "react-router-dom";
const LatestWork = () => {
  return (
    <section className="latestWork">
      <div className="container">
        <div className="row">
          <div className="latestWork__title">
            <h2>Our Latest Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac enim
              aliquam feugiat ullamcorper. Id risus mattis neque, ullamcorper.
              Sed sit commodo vestibulum cras in cras. Nec proin scelerisque
              quis nisl vitae, egestas non. Fringilla auctor.
            </p>
          </div>
        </div>
        <div className="latestWork__items">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="latestWork-item-div">
                <div className="latestWork-item-inside">
                  <img src={itemIamge1} alt="item" loading="lazy" />
                  <div className="thumb">Architecture</div>
                </div>
                <div className="latestWork__content">
                  <h2>
                    <Link to="/about">Best Architecture Design</Link>
                  </h2>
                  <p>
                    Consectetur adipiscing elit. Purusout phasellus malesuada
                    lectus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="latestWork-item-div">
                <div className="latestWork-item-inside">
                  <img src={itemIamge2} alt="item" loading="lazy" />
                  <div className="thumb">INTERIOR</div>
                </div>
                <div className="latestWork__content">
                  <h2>
                    <Link to="/about">Best Architecture Design</Link>
                  </h2>
                  <p>
                    Consectetur adipiscing elit. Purusout phasellus malesuada
                    lectus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="latestWork-item-div">
                <div className="latestWork-item-inside">
                  <img src={itemIamge1} alt="item" loading="lazy" />
                  <div className="thumb">Architecture</div>
                </div>
                <div className="latestWork__content">
                  <h2>
                    <Link to="/about">Best Architecture Design</Link>
                  </h2>
                  <p>
                    Consectetur adipiscing elit. Purusout phasellus malesuada
                    lectus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vector-1">
        <img src={vectorIamge1} alt="vector1" loading="lazy" />
      </div>
      <div className="vector-2">
        <img src={vectorIamge2} alt="vector2" loading="lazy" />
      </div>
    </section>
  );
};

export default LatestWork;
