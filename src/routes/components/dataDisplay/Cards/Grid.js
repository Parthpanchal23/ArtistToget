import React from "react";
import {Card} from "antd";
import IconWithTextCard from "../../../../components/dashboard/CRM/IconWithTextCard";

const Grid = () => {
  return (
    <Card title="Card Title">
      <Card.Grid><IconWithTextCard cardColor="blue"  title="SINGER" /></Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
    </Card>
  );
};

export default Grid;
