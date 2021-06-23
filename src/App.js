import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
//components
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import Cast from "./components/MovieAdditionalDetails/Cast";
import Reviews from "./components/MovieAdditionalDetails/Reviews";
import TwoColumns from "./layout/twocolumns";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
        <Route
          path="/movies/:movieId"
          render={(props) => {
            const { path } = props.match;
            return (
              <TwoColumns component={<MovieDetailsPage {...props} />}>
                <Route path={`${path}/cast`} component={Cast} />
                <Route path={`${path}/reviews`} component={Reviews} />
              </TwoColumns>
            );
          }}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
