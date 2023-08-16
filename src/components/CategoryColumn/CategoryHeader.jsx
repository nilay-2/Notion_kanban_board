import React from "react";
import "../../css/CategoryColumn/categoryHeader.css";
const CategoryHeader = ({ category, listLength }) => {
  return (
    <div className="category-header">
      <div className="card-details category-detail-header">
        <i className="bi bi-circle"></i>
        <span className="card-status">{category}</span>
        <span className="card-count">{listLength.length}</span>
      </div>
      <div className="add-icon">
        <span>
          <i className="bi bi-plus-lg"></i>
        </span>
        <span>
          <i className="bi bi-three-dots"></i>
        </span>
      </div>
    </div>
  );
};

export default CategoryHeader;
