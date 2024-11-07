import React from "react";
import "./SideBarBox.css";
import { useNavigate } from "react-router-dom";
const SideBarBox = ({ heading, content, sub_content, bttnLabel, bttnLink }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebox-wrapper">
        <h3 className="sidebox-heading">{heading}</h3>
        <p className="sidebox-content">{content}</p>
        <p>{sub_content}</p>
        {bttnLink && (
          <button className="" onClick={() => navigate(`${bttnLink}`)}>
            {bttnLabel}
          </button>
        )}
      </div>
    </>
  );
};

export default SideBarBox;
