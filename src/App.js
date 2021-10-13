import {lazy, Suspense} from "react";
import {Route, Switch, Redirect, useRouteMatch} from "react-router-dom";
import Container from "./components/Container/Container";
import AppNav from "./components/AppNav/AppNav";
import HomePage from "./moviesPages/homePage/HomePage";

const MoviesPage = lazy(() => import("./moviesPages/moviesPage/MoviesPage.js"));
const MoviesDetailsPage = lazy(() => import("./moviesPages/movieDetailsPage/MovieDetailsPage"));

const App = () => {
    const {url} = useRouteMatch();
    return (
        <Container>
            <AppNav/>
            <Suspense fallback={<h2>Загружается...</h2>}>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    {/*<Route path="/movies" component={MoviesPage} exact/>*/}
                    <Route path="/movies" component={MoviesPage} exact/>
                    <Route path="/movies/:movieId" component={MoviesDetailsPage} exact/>
                    <Redirect to="/"/>
                    {/*<Route to="/" component={HomePage}/>*/}
                    {/*<Route render={() => <Redirect to={{pathname: "/"}} />} />*/}
                </Switch>
            </Suspense>
        </Container>
    );
}

export default App;
