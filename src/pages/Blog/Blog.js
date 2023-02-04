import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogData } from "../../utils/data";
import "./Blog.css"
const Blog = () => {
  // arrows
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(blogData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="blog__cards">
            {blogData
              ?.slice(pagesVisited, pagesVisited + usersPerPage)
              .map((item, index) => (
                <BlogCard
                  item={item}
                  key={index}
                  path="paper-inside"
                  type="first"
                />
              ))}
          </div>
          <div className="bottom-arrows">
            <ReactPaginate
              previousLabel={"السابق"}
              nextLabel={"التالى"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              pageRangeDisplayed={3}
              breakLabel="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
