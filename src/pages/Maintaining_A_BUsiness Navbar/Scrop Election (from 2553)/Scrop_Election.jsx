import React from "react";
import "./Scrop_Election.css";
import Tabs_Scrop_Election from "./Tabs_Scrop_Election/Tabs_Scrop_Election";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";

const Scrop_Election = () => {
  return (
    <div className="scrop-election-container">
      <h2 className="scrop-election-heading">IRS S Corp Election Form 2553</h2>
      <div className="scrop-election-bottom-container">
        <div className="scrop-election-left-container">
          <Tabs_Scrop_Election />
        </div>
        {/* <div className="scrop-election-right-container">
          <h3 className='scrop-election-right-h3'>Let's Ascend Incoperate</h3>
          <p>Give us a call today to place your order.</p>
          <button className="scrop-election-button-full">Get Started</button>
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

export default Scrop_Election;
