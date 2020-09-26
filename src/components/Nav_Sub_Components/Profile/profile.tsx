import React from "react";
import { ImageUrls } from "../../../app_data/urls";

import "./profile_styles.scss";
import { NewTheme } from "../../../themes";

export default function Profile() {
  return (
    <div className="profile-main">
      <img
        src={ImageUrls.myProfile}
        alt="profile"
        style={{ border: `5px solid ${NewTheme.btnColor}` }}
      />
      <div className="profile-content">
        <div className="headers">
          <h2>Marc Dwyer</h2>
          <h3>Web Developer</h3>
          {/* <span className="skills">JavaScript/TS Developer</span> */}
        </div>
      </div>
    </div>
  );
}
