import React from "react";
import { Component } from "react";
import "./css-components/ProfileSect.css";

class ProfileSect extends Component {
  render() {
    return (
      <div className="profileBox">
        <div className="profileImg"></div>
        <div className="profileDesc"></div>
        <div className="navBar"></div>
      </div>
    );
  }
}

export default ProfileSect;
