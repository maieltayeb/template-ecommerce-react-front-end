import React from "react";
const Filter = props => {
  return (
    <ul className="list list--vr-separator">
      {props.filter.map(type => (
        <li
          key={type._id}
          className={type._id=== props.currentType  ? "list-group-item active"  : "list-group-item"}
          onClick={() => props.onFilter(type._id)}>
          <i className="link__icon fas fa-angle-right"></i>
          <a >{type.categoryName}</a>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
