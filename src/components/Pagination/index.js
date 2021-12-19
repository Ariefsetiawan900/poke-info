import React from "react";
import { Arrows } from '../../components';
import "./style.css"

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <Arrows align="left" />
        </div>
      </button>
      <div>
        {page} to {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <Arrows align="right" />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
