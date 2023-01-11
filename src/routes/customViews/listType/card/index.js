import React from "react";
import {cardsList} from "../data";
import {Col, Row,Card, Select} from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import Basic from '../../../components/navigation/Pagination/Basic';
import CardsListItem from "../Component/CardsListItem";
const Option = Select.Option;
const CardList =({match})=> {
  return (
    <>
   
    <div className="gx-main-content gx-pb-sm-4">
    <Card className="gx-card" title="">
      <Select className="gx-mr-3 gx-mb-3" defaultValue="Singer" style={{width: 120}} >
          <Option value="Singer">Singer</Option>
          <Option value="Dancer">Dancer</Option>
          <Option value="Musician" >Musician</Option>
          <Option value="MAkeupArtist">MAkeupArtist</Option>
          <Option value="DJ">DJ</Option>
          <Option value="Painter">Painter</Option>
        </Select>
        
      </Card>
      <Row>
      
        <Col span={24}>
          <ContainerHeader title="Project list" match={match}/>
        </Col>
    
     
        <Col span={24}>
          {cardsList.map((data, index) => (
            <CardsListItem key={index} data={data} styleName="gx-card-list"/>
          ))}
        </Col>
        <Col>
        <center>
        <Basic/>
        </center>
        </Col>
      </Row>
      
    </div>
    </>
  )
};

export default CardList;
