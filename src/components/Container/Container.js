import React from "react";
import s from "./Container.module.css";

const Container = ({ children }) => (
  <div className={s.Container}>{children}</div>
);

export default Container;
