import { Col,Row,Select} from "antd";

import React from "react";

const Flogo = () => {
    const Option = Select.Option;   
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    
  return (
      <>
     
      <Row style={{ borderBottom:'solid 1px', color:'white', paddingBottom:'1%'}}>
          <Col  xl={22} lg={20} md={20} sm={18} xs={14}><img alt="logo1" style={{ whidth:"100px",
        height:"50px"}} src={require("assets/images/logo.png")}/>
        <span></span>   
      </Col>
      
    <Col  >
    <Select className="gx-mr-3 gx-mb-3" defaultValue="India" style={{  }} onChange={handleChange}>
          <Option value="India">India</Option>
          <Option value="Us">US</Option>
          <Option value="China" >China</Option>
          <Option value="canada">Canada</Option>
        </Select>
        

    </Col>

      </Row>
      
      
      </>
  );
};

export default Flogo;
