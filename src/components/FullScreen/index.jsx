import React, { useState, useEffect } from "react";
import screenfull from "screenfull";
import { message, Tooltip } from "antd";
import "./index.less";
const click = () => {
  if (!screenfull.isEnabled) {
    message.warning("you browser can not work");
    return false;
  }
  screenfull.toggle();
};

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const change = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  useEffect(() => {
    screenfull.isEnabled && screenfull.on("change", change);
    return () => {
      screenfull.isEnabled && screenfull.off("change", change);
    };
  }, []);

  const title = isFullscreen ? "取消全屏" : "全屏";
  const Icon = require('@ant-design/icons')[isFullscreen ? "FullscreenExitOutlined" : "FullscreenOutlined"];
  return (
    <div className="fullScreen-container">
      <Tooltip placement="bottom" title={title}>
          <Icon onClick={click}/>
      </Tooltip>
    </div>
  );
};

export default FullScreen;
