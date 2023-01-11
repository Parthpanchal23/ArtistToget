import React from "react";
import {Col} from "antd";  
import Widget from "components/Widget";
import {ticketList} from "../../../routes/main/dashboard/CRM/data";
import TicketItem from "./TicketItem";


const TicketList =()=> {

    return (  
      
      <Widget title={
        <h2 className="h4 gx-text-capitalize gx-mb-0">
          Recent Project</h2>
      } styleName="gx-card-ticketlist"
              extra={<h5 className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
               See all project <i
                className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/>
              </h5>}>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        {
          ticketList.map((ticket, index) => <TicketItem key={index} data={ticket}/>)
        }
        </Col>
        <div className="gx-task-list-item gx-d-block gx-d-sm-none"><h5
          className="gx-text-primary gx-mb-0 gx-pointer"> See all Projects <i
          className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/></h5>
        </div>
        {/* <Projectlist/> */}
       
      </Widget>
    
    );
}


export default TicketList;
