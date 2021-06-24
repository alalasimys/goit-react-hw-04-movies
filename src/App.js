import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
//Components
import HeaderLayout from "./components/Header";
import FooterLayout from "./components/Footer";
import Cast from "./components/MovieAdditionalDetails/Cast";
import Reviews from "./components/MovieAdditionalDetails/Reviews";
import TwoColumns from "./layout/twoColumns";
import BackgroundLayout from "./layout/BackgroundLayout";
import { Layout } from "antd";
import Loader from "react-loader-spinner";
//Routes
import routes from "./routes";
//styles
import "./styles/styles.css";
import "antd/dist/antd.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const { Content } = Layout;

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
      <Layout>
        <HeaderLayout />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Suspense
            fallback={
              <Loader
                className="Loader"
                type="BallTriangle"
                color="#001529"
                height={100}
                width={100}
              />
            }
          >
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.movies} component={MoviesPage} />
              {/* <Route path="/movies/:movieId" component={MovieDetailsPage} /> */}
              <BackgroundLayout>
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
              </BackgroundLayout>
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Content>
        <FooterLayout />
      </Layout>
    </>
  );
};

export default App;
