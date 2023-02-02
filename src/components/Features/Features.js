import React from "react";
import { Link } from "react-router-dom";
import features1 from "../../assets/features1.png";
import FeatureCard from "./FeatureCard";
import "./Features.css";
const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="features__title">
            <h2>Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac enim
              aliquam feugiat ullamcorper. Id risus mattis neque, ullamcorper.
              Sed sit commodo vestibulum cras in cras. Nec proin scelerisque
              quis nisl vitae, egestas non. Fringilla auctor.
            </p>
          </div>

          <div className="features__items">
            <div className="row align-items-center">
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
