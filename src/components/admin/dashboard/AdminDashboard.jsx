import React from "react";
import "../dashboard/adminDashboard.css";
import SideMenu from "../sideMenu/SideMenu";
import AdminChart from "../dashboardMainContent/adminChart/AdminChart";
import MobileAdminMenu from "./mobileAdminMenu";

const AdminDashboard = () => {
  return (
    <>
      <div className="adminDashboard">
        <div className="sideMenuContainer admin-sidebar">
          <SideMenu />
        </div>
        <div className="mobile-admin-dasboard">
          <MobileAdminMenu />
        </div>
        <div className="adminChartContainer">
          <AdminChart />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
