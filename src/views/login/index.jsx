import React from "react";
import { Redirect } from "react-router-dom";
import { DingdingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";
import LoginForm from "../loginForm";

const Login = (props) => {
    const { token } = props;

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="login-container">
      <div className="warp">
        <div className="panel">
          <div className="welcome">
            <div className="hd">
              <DingdingOutlined className="logo" /> 帮助中心 &gt;
            </div>
            <h2>欢迎使用</h2>
            <p>本项目是一个学习项目</p>
          </div>
          <div className="form"><LoginForm/></div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => state.user, { login, getUserInfo })(Login);
