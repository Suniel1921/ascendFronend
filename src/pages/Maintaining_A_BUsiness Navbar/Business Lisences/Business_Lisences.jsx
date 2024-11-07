import React from "react";
import "./Business_Lisences.css";
import Tabs_Business_License from "./Tabs_Business_Lisence/Tabs_Business_Lisence";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const Business_Licenses = () => {
  return (
    <div className="business-licenses-container">
      <h2 className="business-licenses-heading">Business Licenses</h2>
      <div className="business-licenses-bottom-container">
        <div className="business-licenses-left-container">
          {/* <Tabs_By_Laws/> */}
          <Tabs_Business_License />
        </div>
        {/* <div className="business-licenses-right-container">
          <h3 className='business-licenses-right-h3'>Let's Ascend Incoperate</h3>
          <p>Give us a call today to place your order.</p>
          <p>
            +1(313) 355-3295
          </p>
        
        </div> */}
        <SideBarBox
          heading={"Let's Ascend Incoperate"}
          content={"Give us a call today to place your order."}
          bttnLabel={"Get Started"}
          bttnLink={"/quote-pricing"}
        />
      </div>
    </div>
  );
};

export default Business_Licenses;
