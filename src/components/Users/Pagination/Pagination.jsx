import React from 'react'
import classNames from "../Users.module.sass";

const Pagination = (props) => {


  const pagesCount = Math.ceil(
    ((props.totalUsersCount / props.pageSize) / 100) - 35
  );

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return pages.map((page, index) => {
    return (
      <span onClick={() => props.onPageChanged(page)} key={index}
        className={props.currentPage === page ? classNames["page--active"] : ""}>
        {page}
      </span>
    );
  })
}

export default Pagination
