import React from "react";
import "./Certificate_of_Good_Standing.css";
import Tabs_Certificate_of_good from "./Tabs_Certificate_of_good/Tabs_Certificate_of_good";
import SideBarBox from "../../../components/sideBarBox/SideBarBox";
// import Tabs_Business_License from './Tabs_Business_License/Tabs_Business_License';

const Certificate_of_Good_Standing = () => {
  return (
    <div className="certificate-of-good-standing-container">
      <h2 className="certificate-of-good-standing-heading">
        Certificate of Good Standing
      </h2>
      <div className="certificate-of-good-standing-bottom-container">
        <div className="certificate-of-good-standing-left-container">
          <Tabs_Certificate_of_good />
        </div>

        <SideBarBox
          heading={"Let's Ascend Incoperate"}
          content={"Give us a call today to place your order."}
          bttnLabel={"Get Started"}
          bttnLink={"/quote-pricing"}
        />
        {/* <div className="certificate-of-good-standing-right-container">
          <h3 className='certificate-of-good-standing-right-h3'>Let's Ascend Incoperate</h3>
          <p>Give us a call today to place your order.</p>
          <button className="business-licenses-button-full">Get Started</button>
        </div> */}
      </div>
    </div>
  );
};

export default Certificate_of_Good_Standing;
