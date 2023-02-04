import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ item }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Link className="link-medium" to={`/blog/${item.id}`}>
      <div className="medium-card">
        <div className="img-container">
          <img src={item.image} alt="header" />
        </div>
        <div className="medium-card-content text-center">
          <h2>{item.title}</h2>
          <p>{truncate(item.description, 150)}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
