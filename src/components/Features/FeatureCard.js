import features1 from "../../assets/features1.png";

const FeatureCard = () => {
  return (
    <div className="col col-lg-4 col-md-6 col-12">
      <div className="features-item-div">
        <img src={features1} alt="item" loading="lazy" />
        <h2>Perfect Planning</h2>
        <p>
          Lacus, etiam sed est eu tempus need Temer diam congue laoret cursus
          nam nunc fam interdum Viverra.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
