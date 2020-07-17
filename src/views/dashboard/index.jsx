import React from "react";
import { connect } from "react-redux";
import TypingCard from "@/components/TypingCard";

const Dashboard = () => {
    const cardContent = `
    <p>欢迎使用本管理后台，</p>
    <p>本后台主要提供一些线上游戏得管理功能。</p>
    <p>主要功能在左边导航区列出，请自行摸索使用。</p>
    <p>如果在使用中有任何问题或者建议，请及时反馈。会听取，但不保证会改！</p>
  `;
  return (
    <div className="app-container">
      <TypingCard title="项目介绍" source={cardContent} />
    </div>
  );
};

export default connect()(
    Dashboard
  );