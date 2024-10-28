import React from "react";

const CategoriesItem = ({data:{Title,SubTitle,Count,Icon}}) => {
  return (
    <div>
      <a href="jobs-grid-layout-full-page.html" className="category-box">
        <div className="category-box-icon">
          {Icon}
        </div>
        <div className="category-box-counter">{Count}</div>
        <div className="category-box-content">
          <h3>{Title}</h3>
          <p>{SubTitle}</p>
        </div>
      </a>
    </div>
  );
};

export default CategoriesItem;
