import React from "react";
import logo from "@/assets/images/logo.svg";
import { connect } from "react-redux";
import "./index.less";
const Logo = (props) => {
    const { name } = props;
  return (
    <div className="sidebar-logo-container">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h1 className="sidebar-title">{name}</h1>
    </div>
  );
};

export default connect((state) => state.user, {})(Logo);