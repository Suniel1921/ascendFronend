import React from "react";
import "./Annual_report.css";
import Tabs_Annual_Report from "./Tabs_Annual_report/Tabs_Annual_report";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";
// import Tabs_Business_License from './Tabs_Business_Lisence/Tabs_Business_Lisence';

const Annual_Report = () => {
  return (
    <div className="annual-report-container">
      <h2 className="annual-report-heading">Annual Report</h2>
      <div className="annual-report-bottom-container">
        <div className="annual-report-left-container">
          <Tabs_Annual_Report />
        </div>

        <SideBarBox
          heading={"Let's Ascend Incoperate"}
          content={"Give us a call today to place your order."}
          sub_content={"+1(313) 355-3295"}
        />
        {/* <div className="annual-report-right-container">
          <h3 className="annual-report-right-h3">Let's Ascend Incoperate</h3>
          <p>Give us a call today to place your order.</p>
          <p>+1(313) 355-3295</p>
        </div> */}
      </div>
    </div>
  );
};

export default Annual_Report;
