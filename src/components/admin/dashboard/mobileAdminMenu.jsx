import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import MenuIcons from "@mui/icons-material/Menu";
import "../dashboard/mobileAdminMenu.css";

import { IoMdArrowDropright } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
export default function MobileAdminMenu() {
  const [open, setOpen] = React.useState(false);

  const location = useLocation(); // To get the current route

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="cst-sidebar">
        <Link
          className={`link ${
            location.pathname === "/dashboard/admin" ? "active" : ""
          }`}
          to={"/dashboard/admin"}
        >
          <h3 className="adminHeading">Admin Dashboard</h3>
        </Link>

        <div className="dropdownContainer">
          {/* <h3 className="dropdownTitle">Testing Heading</h3> */}
          <div className="dropdownContent open">
            {" "}
            {/* Keep content open by default */}
            {/* <Link className={`link ${location.pathname === '/dashboard/admin/manage-orders' ? 'active' : ''}`} to={'/dashboard/admin/manage-orders'}> */}
            <Link to={"/dashboard/admin/manage-orders"}>
              {" "}
              <p className="sideMenuChildHeading">
                <IoMdArrowDropright className="subItemIcon" /> Manage Orders
              </p>
            </Link>
            <Link to={"/dashboard/admin/user-details"}>
              {" "}
              <p className="sideMenuChildHeading">
                <IoMdArrowDropright className="subItemIcon" />
                User Details
              </p>
            </Link>
            <Link to={"/dashboard/admin/user-documents"}>
              {" "}
              <p className="sideMenuChildHeading">
                <IoMdArrowDropright className="subItemIcon" />
                User Documents
              </p>
            </Link>
            <Link to={"/dashboard/admin/userNewOrder"}>
              {" "}
              <p className="sideMenuChildHeading">
                <IoMdArrowDropright className="subItemIcon" />
                New Orders
              </p>
            </Link>
            <Link to="/dashboard/admin/createPackage">
              {/* <Link className={`link ${location.pathname === '/dashboard/admin/createPackage' ? 'active' : ''}`} to='/dashboard/admin/createPackage'> */}
              <p className="subItemLink sideMenuChildHeading">
                <IoMdArrowDropright className="subItemIcon" /> Add Package
              </p>
            </Link>
            {/* <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test4</p>
          <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test5</p> */}
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer(true)} className="bttn-menu">
        <MenuIcons />
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)} className="drawer-wrap">
        {DrawerList}
      </Drawer>
    </div>
  );
}
