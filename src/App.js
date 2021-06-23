import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
//Components
import Header from "./components/Header";
import Cast from "./components/MovieAdditionalDetails/Cast";
import Reviews from "./components/MovieAdditionalDetails/Reviews";
import TwoColumns from "./layout/twoColumns";
//Routes
import routes from "./routes";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
          <Route
            path={routes.movieDetails}
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
      </Suspense>
    </>
  );
};

export default App;
