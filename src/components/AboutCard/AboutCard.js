import React from "react";
import aboutImage from "../../assets/about1.png";
const AboutCard = () => {
  return (
    <div className="row about-content__cards">
      <div className="col-md-6 col-sm-12">
        <figure>
          <img src={aboutImage} alt="who are we" width="100%" />
        </figure>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="about-content_c">
          <h3>Who We Are ?</h3>
          <p>
            Top Management is a real estate consulting company that provides the
            best pre- and after-sales service to the customer until the final
            stage The company was called "Top Management" because it aspires to
            become the most powerful company in managing properly, and this is
            our goal that Some companies in the field of marketing and sales
            management in various regions of the new administrative capital
          </p>
          <button className="theme-btn">Download Company Profile</button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
