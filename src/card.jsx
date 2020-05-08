import React from "react";
import { Link } from "react-router-dom";
const Card = props => {
  return (
    <div className="item-medium-1">
      {props.product.productDiscount !=0 && (
        <div className="item-medium-1__alert">Sale</div>
      )}
      <div
        className="item-medium-1__image image"
        style={{
          backgroundImage:  "url('img/products/product-grey-7.jpg')"
         // backgroundImage: `${props.product.photo}`
        }}
      >
        <a href="#" className="item-medium-1__action">
          Add to Cart
        </a>
      </div>
      <a href="#">
        <h5>{props.product.productName}</h5>
        <div className="flex-row">
          <div>
            {(props.product.productDiscount && (
              <React.Fragment>
                <del>{props.product.productPrice} $</del>
                <span className="lable">
                  {props.product.productPrice - props.product.productDiscount} $
                </span>
              </React.Fragment>
            )) || <span className="lable">{props.product.productPrice} $</span>}
          </div>
        </div>
      </a>
      <div className="crud-actions">
        <Link to={`/detailsproduct/${props.product._id}`}>
          <i className="far fa-eye"></i>
        </Link>
        <Link to={`/editproduct/${props.product._id}`}>
          
          <i className="fas fa-edit" ></i>
        </Link>
        <a onClick={() => props.onDelete(props.product)} href="#">
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
