import { Col,Row} from "antd";

import React from "react";

const Fdata = () => {
    
    
  return (
        <Row>
            <Col span={12} >
                    <div className="gx-wel-ema gx-pt-xl-2">
                  
                    <p className="gx-fs-sm gx-text-uppercase">usefull Link</p>
                    <ul className="gx-list-group">
                        <li>
                     
                        <span>Contact</span>
                        </li>
                        <li>
                        
                        <span>Privacy Policy</span>
                        </li>
                        <li>
                       
                        <span>Terms of use</span>
                        </li>
                        
                    </ul>
            </div>

            </Col>
            <Col span={12}>
            <div className="gx-wel-ema gx-pt-xl-2">
                  
                  <p className="gx-fs-sm gx-text-uppercase">Account</p>
                  <ul className="gx-list-group">
                      <li>
                   
                      <span>Contact</span>
                      </li>
                      <li>
                      
                      <span>Privacy Policy</span>
                      </li>
                      <li>
                     
                      <span>Terms of use</span>
                      </li>
                      
                  </ul>
          </div>
           </Col>
           
        </Row>
      
     
  );
};

export default Fdata;
