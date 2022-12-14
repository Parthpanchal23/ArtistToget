import React from "react";
import Widget from "components/Widget";

import {Col, Row} from "antd";
import ProductItem from "components/eCommerce/ProductItem";
import productData from "routes/customViews/eCommerce/productData";

const Overview = () => {
 
  return (
    
 
  
      <Widget title={
        <h2 className="h4 gx-text-capitalize gx-mb-0">
          All Artist</h2>
          
      } styleName="gx-card-ticketlist"
              extra={<h5 className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
                See all Artist <i
                className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/>
              </h5>}>
        
        <div className="gx-task-list-item gx-d-block gx-d-sm-none"><h5
          className="gx-text-primary gx-mb-0 gx-pointer">See all Artist <i
          className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/></h5>
        </div>
     
      
      <Row>
     
      
      {productData.map((product, index) => (<Col key={index} xl={6} md={6} sm={24} xs={24}>
          <ProductItem key={index} grid product={product}/>
        </Col>
      ))}
    
    </Row>
    </Widget>
   

  );
};

export default Overview;
