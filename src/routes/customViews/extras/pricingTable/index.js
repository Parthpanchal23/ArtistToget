import React from "react";
import {Card, Col, Row} from "antd";
import Circle from './Circle/index';
import IntlMessages from "util/IntlMessages";




const PricingTable = ({match}) => {
  return (
    <Row>
     

      <Col span={24}>
        <Card title={<IntlMessages id="sidebar.extraElements.pricingTable"/>}>
        <Circle/>
        </Card>
      </Col>

      
    </Row>
  );
};

export default PricingTable;

