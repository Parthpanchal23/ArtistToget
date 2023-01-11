import React from "react";
import {Card, Timeline} from "antd";

const Color = () => {
  return (
    <Card title="Color" className="gx-card">
      <Timeline>
        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item color="red">
          <p style={{fontSize: "14px", color: "red"}}>Solve initial network problems 1</p>
          <p style={{fontSize: "12px", color: "brown"}}>Solve initial network problems 2</p>
          <p style={{fontSize: "10px"}}>Solve initial network problems 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Color;
