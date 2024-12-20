import React from "react";
import "./DBA_Business_Name.css";
import Tabs_DBA_Business_Name from "./Tabs_DBA_Business_Name/Tabs_DBA_Business_Name";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const DBA_Business_Name = () => {
  return (
    <div className="dba-business-name-container">
      <h2 className="dba-business-name-heading">DBA/Business Names</h2>
      <div className="dba-business-name-bottom-container">
        <div className="dba-business-name-left-container">
          <Tabs_DBA_Business_Name />
        </div>

        <div className="dba-business-name-right-container">
          <div className="cst-right">
            <SideBarBox
              heading={"Let's Ascend Incoperate"}
              content={"Give us a call today to place your order."}
              sub_content={"+1(313) 355-3295"}
            />
          </div>
          {/* <div className="dba-business-name-right-container_div">
            <h3 className="dba-business-name-right-h3">
              Let's Ascend Incoperate
            </h3>
            <p>Give us a call today to place your order.</p>
            <p>
              <b>+1(313) 355-3295</b>
            </p>
          </div> */}

          <div className="DBA_Business_right_bottom">
            <h3 className="dba-business-name-right_bottom-h3">
              Get your questions answered.
            </h3>
            <p className="DBA_Business_right_bottom_p">
              Not quite ready to pull the trigger? Our Incorporation Specialists
              can provide some answers to help you decide.
            </p>
            <button className="DBA_button_fullwidth">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBA_Business_Name;
