import React from "react";
import {Card} from "antd";  


const Categories=()=>{
    return(
        <>
       
        
        <Card title= "Populer Categories" >
      <Card.Grid style={{backgroundColor:'LightGrey'}}>SINGER</Card.Grid>
      <Card.Grid>DANCER</Card.Grid>
      <Card.Grid style={{backgroundColor:'LightGrey'}}>MUSICIAN</Card.Grid>
      <Card.Grid>SCLUPTURE</Card.Grid>
      <Card.Grid>CALIGRAPHER</Card.Grid>
      <Card.Grid style={{backgroundColor:'LightGrey'}}>PHOTOGRAPHER</Card.Grid>
      <Card.Grid>ILLUSTRATION</Card.Grid>
      <Card.Grid style={{backgroundColor:'LightGrey'}}>MAKEUP ARTIST</Card.Grid>
      <Card.Grid style={{backgroundColor:'LightGrey'}}>DJ</Card.Grid>
      <Card.Grid>GRAPHICS DESIGNER</Card.Grid>
      <Card.Grid style={{backgroundColor:'LightGrey'}}>SINGER</Card.Grid>
      <Card.Grid>DANCER</Card.Grid>
    </Card>
        </>

    );
};
export default Categories;