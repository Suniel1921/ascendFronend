import React from "react";
import "./clientChart.css";
import ClientOrder from "./clientInfo/ClientOrder";
import ClientProgress from "./clientInfo/ClientProgress";
import ClientPayments from "./clientInfo/ClientPayments";
import TotalProgressWork from "./clientInfo/TotalProgressWork";
import ClientDocumentStatus from "./clientInfo/ClientDocumentStatus";
import Remarks from "./clientInfo/Remarks";
import TotalPercentageOfWork from "./clientInfo/TotalPercentageOfWork";
import PaymentHistory from "./clientInfo/PaymentHistory";

const ClientChart = () => {
  return (
    <div className="clientChartContainer">
      <div className="client_Grid_Dashboard">
        <div className="client_charts box1 res-box">
          <ClientOrder />
        </div>
        <div className="client_charts box2 res-box">
          <ClientProgress />
        </div>
        <div className="client_charts box3 res-box">
          <ClientPayments />
        </div>
        <div className="client_charts box4 res-box-big">
          <TotalProgressWork />
        </div>
        <div className="client_charts box5 res-box-big">
          <ClientDocumentStatus />
        </div>
        <div className="client_charts box6 res-box">
          <PaymentHistory />
        </div>
        <div className="client_charts box7 res-box">
          <Remarks />
        </div>
        <div className="client_charts box8 res-box">
          <TotalPercentageOfWork />
        </div>
      </div>
    </div>
  );
};

export default ClientChart;
