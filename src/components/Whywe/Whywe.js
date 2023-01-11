import { Col,Row} from 'antd';
import React from 'react';

const Whywe=()=>{
    return(
        <>
        <center><h1>Why Choose We?</h1>
       
        <Row>
        
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div style={{ border:"groove"}}className={`gx-product-item   'gx-product-vertical' : 'gx-product-horizontal'}`}>
                    
                      
                     <h1>Hirer</h1>
                     <img alt="user" src={require("assets/images/blog-02a.jpg")} style={{width:'100%',height:'50vh'}}></img>

      <div className="gx-product-body">
        <h3 className="gx-product-title">
         <ul>
             <li>Experts artist Found</li>
             <li>Post Free Job</li>
             <li>Work in flexible  Envirnoment</li>
             <li>Payment with Secure Gateway</li>
             <li>Lowest Fee Pay</li>
         </ul>
        </h3>
        
        
        
      </div>

      
    </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div style={{ border:"groove"}}className={`gx-product-item   'gx-product-vertical' : 'gx-product-horizontal'}`}>
                     
                      
                     <h1>Artist</h1>
                     <img alt="user"  src={require("assets/images/C4.jpg")} style={{height:'50vh',width:'100%'}} ></img>
                     <div className="gx-product-body">
        <h3 className="gx-product-title">
         <ul>
             <li>Find Job & Apply</li>
             <li>Manage Project</li>
             <li>Work in flexible  Envirnoment</li>
             <li>Payment with Secure Gateway</li>
             <li>Lowest Fee Pay</li>
         </ul>
        </h3>
        
      </div>
    </div>
    </Col>
        </Row>
        </center>
        </>
    )
}
export default Whywe;