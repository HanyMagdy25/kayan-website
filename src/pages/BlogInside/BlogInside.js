import React from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogData } from "../../utils/data";

const BlogInside = () => {
  const param = useParams();
  const paperInsider = blogData.find((a) => a.id === parseInt(param.id));
  return (
    <div className="blogInside">
      <div className="container">
        <div className="">
          <h1 className="header-headline">{paperInsider?.title}</h1>
          <p className="header-paragragh">{paperInsider?.description}</p>
        </div>
        <div className="img-paperinside-container">
          <img
            src={paperInsider.image}
            className="img-header"
            alt="headerImage"
          />
        </div>
        <div className="paper-paragraph-container">
          <p className="mt-3">{paperInsider.content}</p>
        </div>
        <div className="more-papers">
          <h1>More Blogs</h1>
          <hr />
          <div className="more-papers-cards">
            {blogData?.slice(0, 3).map((item, index) => (
              <BlogCard
                item={item}
                key={index}
                type="first"
                path="paper-inside"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInside;
