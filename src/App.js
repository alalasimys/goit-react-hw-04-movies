import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
//components
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
