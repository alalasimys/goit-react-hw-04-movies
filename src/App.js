import React from "react";
import { Route, Switch } from "react-router-dom";
//components
import Header from "./components/Header";
import HomePage from "./views/HomePage";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
