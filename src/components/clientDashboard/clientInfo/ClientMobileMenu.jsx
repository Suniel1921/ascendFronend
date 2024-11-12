import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcons from "@mui/icons-material/Menu";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuthGlobally } from "../../../contexts/AuthContext";
import "../clientInfo/ClientMobileMenu.css";
import Divider from "@mui/material/Divider";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [auth] = useAuthGlobally();
  const [dropdowns, setDropdowns] = useState({
    ecommerce: false,
    category: false,
  });

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleDropdown = (name) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="clientDataContainer">
        <div className="cst-img-wrapper">
          <img
            className="clientImg"
            src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg"
            alt=""
          />
        </div>
        <h4 style={{ textTransform: "capitalize" }}>
          Hi<span className="waving-hand">👋</span> {auth.user.name}
        </h4>
        <p className="admin-desc">{auth?.user?.email}</p>
        <hr />
        <br />
      </div>

      <Divider />

      <div className="dropdownContainer cst-dasboard">
        <h3 onClick={() => toggleDropdown("ecommerce")}>
          <IoMdArrowDropright
            className={`icon ${dropdowns.ecommerce ? "rotate" : ""}`}
          />
          <span className="dropdownTitle">Dashboard</span>
        </h3>
        <div className={`dropdownContent ${dropdowns.ecommerce ? "open" : ""}`}>
          <Link className="link" to="/client-dashboard">
            <p>
              <IoMdArrowDropright className="subItemIcon" />
              Home
            </p>
          </Link>
          <Link className="link" to="/edit-info">
            <p>
              <IoMdArrowDropright className="subItemIcon" />
              Edit Info
            </p>
          </Link>
        </div>
      </div>

      <div className="dropdownContainer">
        <h3 onClick={() => toggleDropdown("category")}>
          <IoMdArrowDropright
            className={`icon ${dropdowns.category ? "rotate" : ""}`}
          />
          <span className="dropdownTitle">Upload Your Document</span>
        </h3>
        <div className={`dropdownContent ${dropdowns.category ? "open" : ""}`}>
          <Link className="link" to="/upload-documents">
            <p>
              <IoMdArrowDropright className="subItemIcon" />
              Documents
            </p>
          </Link>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer(true)} className="bttn-menu">
        <MenuIcons />
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        className="mobile-drawer-wrapper"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
