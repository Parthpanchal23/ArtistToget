import React from "react";
import {cardsList} from "../data";
import {Col, Row} from "antd";
import ContainerHeader from "components/ContainerHeader/index";

import CardsListItem from "../Component/CardsListItem";
import mData from "./mjdata";

const ManageJob = ({mData}) => {
 
    return
    (
        <div className="gx-main-content gx-pb-sm-4">
            <Row>
                <Col span={24}>
                <ContainerHeader title="Manage Job" match={match}/>
                </Col>
                <Col span={24}>
                {mData.map((data, index) => (
                    <CardsListItem key={index} data={data} styleName="gx-card-list"/>
                ))}
                </Col>
            </Row>
         </div>

    );
};
export default ManageJob;