import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import Content from "./Content";
import Header from "./Header";
import RightPanel from "./RightPanel";
import Sider from "./Sider";
import TagsView from "./TagsView";
const Main = (props) => {
  const { tagsView } = props;
  const { Footer } = Layout;
  return (
    <Layout
    style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        {tagsView ? <TagsView /> : null}
        <Content />
        <RightPanel />
        <Footer style={{ textAlign: 'center' }}>Admin Manager ©2020 Created by ZM ABEL</Footer>
      </Layout>
    </Layout>
  );
};
export default connect((state) => state.settings)(Main);
