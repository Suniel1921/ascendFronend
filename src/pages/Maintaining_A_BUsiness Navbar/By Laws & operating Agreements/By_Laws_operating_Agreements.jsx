import React from "react";
import "./By_Laws_operating_Agreements.css";
import Tabs_By_Laws from "./Tabs_By_Laws/Tabs_By_Laws";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const By_Laws_operating_Agreements = () => {
  return (
    <div className="bylaws-container">
      <h2 className="bylaws-heading">
        What are Corporation Bylaws and LLC Operating Agreements?
      </h2>
      <div className="bylaws-bottom-container">
        <div className="bylaws-left-container">
          <Tabs_By_Laws />
        </div>

        <SideBarBox
          heading={"Let's Ascend Incoperate"}
          content={"Give us a call today to place your order."}
          bttnLabel={"Get Started"}
          bttnLink={"/quote-pricing"}
        />
        {/* <div className="bylaws-right-container">
          <h3 className="bylaws-right-h3">Let's Ascend Incoperate</h3>
          <p>Give us a call today to place your order.</p>
          <p>+1(313) 355-3295</p>
        </div> */}
      </div>
    </div>
  );
};

export default By_Laws_operating_Agreements;
