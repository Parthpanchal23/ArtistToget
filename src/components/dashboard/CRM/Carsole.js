import React from "react";
import {Card, Carousel} from "antd";



const Data2 = () => {
  return (
      
    <Card className="gx-card" style={{height: '80vh',overflow:'hidden'}}>
                <Carousel autoplay title="gallery">
                  <div><h2>Dancer</h2><img alt="logo1" src={require("assets/images/A4.jpg")}/></div>
                  <div><h2>Dancer1</h2><img alt="logo1" src={require("assets/images/A5.jpg")}/></div>
                  <div><h2>Singer</h2><img alt="logo1" src={require("assets/images/A6.jpg")}/></div>
                  <div><h2>Singer1</h2><img alt="logo1" src={require("assets/images/C3.jpg")}/></div>
                  <div><h2>Singer2</h2><img alt="logo1" src={require("assets/images/C5.jpg")}/></div>
               </Carousel>   
               <p
              style={{
                position: "absolute",
                left: "19%",
                fontsize:"10%",
                top:"50%",
                color: "white",
                transform: " translateX(-50%)"
              }}
            >
             Hire experts freelancers for job, any time

            </p> 
            <p style={{
                position: "absolute",
                left: "30%",
                top:"55%",
                color: "white",
               fontWeight:"10%",
                
                transform: " translateX(-50%)"
              }}>Huge community of dancer, Singer and designer <br/>ready for your project.
              </p>                                  
              </Card>
  );
};

export default Data2;
