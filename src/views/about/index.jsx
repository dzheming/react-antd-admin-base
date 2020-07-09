import React from "react";
import TypingCard from "@/components/TypingCard";
const About = () => {
  const cardContent = `
    <p>求大佬们点个 star 啦，感谢感谢~~</p>
  `;
  return (
    <div className="app-container">
      <TypingCard title="关于作者" source={cardContent} />
    </div>
  );
};

export default About;
