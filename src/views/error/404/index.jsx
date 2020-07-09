import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Row, Col } from "antd";
import errImg from "@/assets/images/404.png";
import "./index.less";

const NotFound = () => {
  let history = useHistory();
  const goHome = () => {
    history.push("/")
  };
  return (
    <Row className="not-found">
      <Col span={12}>
        <img src={errImg} alt="404" />
      </Col>
      <Col span={12} className="right">
        <h1>404</h1>
        <h2>抱歉，你访问的页面不存在</h2>
        <div>
          <Button type="primary" onClick={goHome}>
            回到首页
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;
