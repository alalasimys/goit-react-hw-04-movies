import React from "react";

const BackgroundLayout = ({ children }) => {
  return (
    <div className="site-layout-background" style={{ padding: 24 }}>
      {children}
    </div>
  );
};

export default BackgroundLayout;
