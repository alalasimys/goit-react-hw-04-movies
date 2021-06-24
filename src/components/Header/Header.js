import React from "react";
//Components
import Navigation from "../Navigation";
import { Layout } from "antd";
//styles
const { Header } = Layout;

const HeaderLayout = () => (
  <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <Navigation />
  </Header>
);
export default HeaderLayout;
