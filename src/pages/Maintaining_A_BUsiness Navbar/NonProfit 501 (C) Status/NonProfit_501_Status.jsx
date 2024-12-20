import React from "react";
import "./NonProfit_501_Status.css";
import Tabs_NonProfit_501_status from "./Tabs_NonProfit_501_status/Tabs_NonProfit_501_status";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const NonProfit_501_Status = () => {
  return (
    <div className="nonprofit-501-status-container">
      <h2 className="nonprofit-501-status-heading">
        Application Requirements for 501(c) and 501(c)(3) Status
      </h2>
      <div className="nonprofit-501-status-bottom-container">
        <div className="nonprofit-501-status-left-container">
          <Tabs_NonProfit_501_status />
        </div>
        {/* <div className="nonprofit-501-status-right-container">
          <h3 className="nonprofit-501-status-right-h3">
            Let's Ascend Incoperate
          </h3>
          <p>Give us a call today to place your order.</p>
          <p>+1(313) 355-3295</p>
         
        </div> */}

        <SideBarBox
          heading={" Let's Ascend Incoperate"}
          content={"Give us a call today to place your order."}
          bttnLabel={"Get Started"}
          bttnLink={"/quote-pricing"}
        />
      </div>
    </div>
  );
};

export default NonProfit_501_Status;
