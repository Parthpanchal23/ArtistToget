import React from "react";
import {Bar, BarChart, ResponsiveContainer, Tooltip} from "recharts";
import {Col, Row,Select} from "antd";
// import Basic from "./Basic";
import Metrics from "components/Metrics";
import {connect} from "react-redux";

const Option = Select.Option;

const data = [
  {name: 'JAN', lastYear: 200, thisYear: 600,},
  {name: 'FEB', lastYear: 500, thisYear: 900,},
  {name: 'MAR', lastYear: 700, thisYear: 1200,},
  {name: 'JUN', lastYear: 500, thisYear: 900,},
  {name: 'AUG', lastYear: 200, thisYear: 800,},
  {name: 'SEP', lastYear: 400, thisYear: 400,},
  {name: 'OCT', lastYear: 400, thisYear: 500,},
  {name: 'NOV', lastYear: 400, thisYear: 1200,},
  {name: 'DEC', lastYear: 200, thisYear: 800,},
];

function handleChange(value) {
  console.log(`selected ${value}`);
}

const TotalRevenueCard = ({width}) => {
  return (
    <Metrics title="TOTAL PROJECT">
      <Row>
        <Col xl={16} lg={16} md={24} sm={24} xs={24}>
          <h1 style={{ fontSize:'50px'}}>2,167</h1>
        </Col>


        <Col lg={6} md={6} sm={24} xs={24}>
        <Select className="gx-mr-3 gx-mb-3" defaultValue="India" style={{width: 120}} onChange={handleChange}>
          <Option value="India">India</Option>
          <Option value="Us">US</Option>
          <Option value="China" >China</Option>
          <Option value="canada">Canada</Option>
        </Select>
        
          
        </Col>
        <Col xl={24} lg={24} md={24} sm={12} xs={12}>
        
          <ResponsiveContainer className="gx-barchart" width="100%" height={70}>
            <BarChart data={data}
                      margin={{top: 0, right: 0, left: 0, bottom: 0}}>
              <Tooltip/>
              <Bar dataKey="lastYear" stackId="a" fill="#038FDE" barSize={width <= 575 ? 4 : 8}/>
              <Bar dataKey="thisYear" stackId="a" fill="#FE9E15" barSize={width <= 575 ? 4 : 8}/>
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Metrics>
  );
};


const mapStateToProps = ({settings}) => {
  const {width} = settings;
  return {width}
};
export default connect(mapStateToProps)(TotalRevenueCard);
