import React from "react";
import { Steps} from "antd";
import Widget from "components/Widget/index";
const Step = Steps.Step;


const CurrencyCalculator = () => {

  

  return (
    <Widget
      title={<h2 className="h4 gx-mb-0 gx-text-capitalize"><center>It's Easy to Get Work Done on ArtistToget</center></h2>}>
      

      <Steps>
        <Step title="Post a Project" description="Create your free job posting and start receiving Quotes within hours." icon=""/>
        <Step title="Hire Artist" description="Compare the Quotes you receive and hire the best freelance professionals for the job."/>
        <Step title="Get Work Done" description="Decide on how and when payments will be made and use WorkRooms to collaborate, communicate and track work."/>
         <Step title="Make Secure Payments" description="Choose from multiple payment methods with SafePay payment protection."/>
      </Steps>
    </Widget>
  );
};

export default CurrencyCalculator;
