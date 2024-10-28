import React from "react";

const Heding = (props) => {
  return (
    <div className={`section-headline margin-top-0 margin-bottom-35 ${props?.className? props?.className:""}`}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Heding;
