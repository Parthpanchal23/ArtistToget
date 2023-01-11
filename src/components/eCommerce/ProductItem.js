import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";


const ProductItem = ({product, grid}) => {
  const {thumb, name, price, offer, cat, rating, country} = product;
  return (
    
    <div style={{ border:"groove"}}className={`gx-product-item  ${grid ? 'gx-product-vertical' : 'gx-product-horizontal'}`}>
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt="User" src={thumb}/>
          </span>
        </div>
      </div>
   
      <div className="gx-product-body">
        <h3 className="gx-product-title">{name}
        <br/>
          <small className="gx-text-grey">{ cat}</small>
        </h3>
        <div className="ant-row-flex">
          <h4>{price} </h4>
          <h5 className="gx-text-muted gx-px-2">
            <del></del>
          </h5>
          <h5 className="gx-text-success">{offer} </h5>
        </div>
        <div className="ant-row-flex gx-mb-1">
          <StarRatingComponent
            name={name}
            value={rating}
            starCount={5}
            editing={false}/>
          <strong className="gx-d-inline-block gx-ml-2">{rating}</strong>
        </div>
        <p>{country}</p>
      </div>

      <div className="gx-product-footer">
        
        <Button type="primary"><Link to="/update/sProfile">View Profile</Link></Button>
        
      </div>
      
    </div>
  )
};

export default ProductItem;

