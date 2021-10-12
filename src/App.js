import {lazy, Suspense} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Container from "./components/Container/Container";
import AppNav from "./components/AppNav/AppNav";
import HomePage from "./moviesPages/homePage/HomePage";

const MoviesPage = lazy(() => import("./moviesPages/moviesPage/MoviesPage.js"));
const MoviesDetailsPage = lazy(() => import("./moviesPages/movieDetailsPage/MovieDetailsPage"));

const App = () => {
    return (
        <Container>
            <AppNav/>
            <Suspense fallback={<h2>Загружается...</h2>}>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/movies" component={MoviesPage} exact/>
                    <Route path="/movies/:movieId" component={MoviesDetailsPage} />
                    {/*<Redirect to="/"/>*/}
                    <Route render={() => <Redirect to={{pathname: "/"}} />} />
                </Switch>
            </Suspense>
        </Container>
    );
}

export default App;
