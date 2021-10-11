import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Container from "./components/Container/Container";
import AppNav from "./components/AppNav/AppNav";
import HomePage from "./moviesPages/homePage/HomePage";
import MoviesPage from "./moviesPages/moviesPage/MoviesPage";
import MoviesDetailsPage from "./moviesPages/movieDetailsPage/MovieDetailsPage";

const App = () => {
    return (
        <Container>
            <AppNav/>

            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>

                <Route path="/movies" exact>
                    <MoviesPage/>
                </Route>


                <Route path="/movies/:movieId">
                    <MoviesDetailsPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Container>
    );
}

export default App;
