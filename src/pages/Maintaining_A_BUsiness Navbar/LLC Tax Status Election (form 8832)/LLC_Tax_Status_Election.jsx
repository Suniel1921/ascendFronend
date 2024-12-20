import React from "react";
import "./LLC_Tax_Status_Election.css";
import Tabs_LLC_Tax_Status_Election from "./Tabs_LLC_Tax_Status_Election/Tabs_LLC_Tax_Status_Election";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const LLC_Tax_Status_Election = () => {
  return (
    <div className="llc-tax-status-election-container">
      <h2 className="llc-tax-status-election-heading">
        What is Form 8832 (LLC Tax Status Election)?
      </h2>
      <div className="llc-tax-status-election-bottom-container">
        <div className="llc-tax-status-election-left-container">
          <Tabs_LLC_Tax_Status_Election />
        </div>
        <SideBarBox
          heading={"Let's Ascend Incoperate"}
          content={"Give us a call today to place your order."}
          bttnLabel={"Get Started"}
          bttnLink={"/quote-pricing"}
        />
        {/* <div className="llc-tax-status-election-right-container">
          <h3 className='llc-tax-status-election-right-h3'>Let's Ascend Incoperate</h3>
          <p>Give us a call today to place your order.</p>
          
          <button className="llc-tax-status-election-button-full">Get Started</button>
        </div> */}
      </div>
    </div>
  );
};

export default LLC_Tax_Status_Election;
