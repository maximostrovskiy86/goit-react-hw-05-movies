import {lazy, Suspense} from "react";
import PropTypes from "prop-types";
import style from "./MovieDetailsPage.module.scss";
import queryApi from "../../services/servicesApi";
import noPhoto from "../../images/nophoto.jpeg";
import {Route, Switch, useParams, useRouteMatch, NavLink, Redirect} from "react-router-dom";
import {useState, useEffect} from "react";
import BackButton from "../../components/backButton/BackButton";
import PageHeading from "../../components/PageHeading/PageHeading";

const Cast = lazy(() => import("../cast/Cast.js"));
const Reviews = lazy(() => import("../reviews/Reviews.js"));

const MovieDetailsPage = ({location, history}) => {
    const {url} = useRouteMatch();

    const [movie, setMovie] = useState(null);
    const [casts, setCast] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [from, setFrom] = useState({});
    const {movieId} = useParams();

    useEffect(() => {
        if (location.state) {
            setFrom(location.state)
        }
    }, [])

    const onBack = () => {
        history.push(from || "/");
    };

    useEffect(() => {
        queryApi.getMediaMovieDetails(movieId).then(setMovie).catch(error => console.log(error));
        queryApi.getMediaMovieCast(movieId).then(setCast).catch(error => console.log(error));
        queryApi.getMediaMovieReviews(movieId).then(setReviews).catch(error => console.log(error));
    }, [movieId]);

    return (
        <>
            <PageHeading text="Details movie"/>
            <BackButton onBack={onBack}/>
            <section>
                {movie && (
                    <div className={style.book}>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : noPhoto}
                             alt={movie.title}/>
                        <div className={style.description}>
                            <h2 className={style.title}>{movie.title}</h2>
                            <p className={style.popularity}>{movie.popularity}</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <ul className={style.genres}>{movie.genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))
                            }
                            </ul>
                        </div>
                    </div>
                )}
            </section>
            <section>
                <p>Additional information</p>
                <ul className={style.listMore}>
                    <li><NavLink to={{
                        pathname: `${url}/cast`,
                    }}>Cast</NavLink></li>
                    <li><NavLink to={{
                        pathname: `${url}/reviews`,
                    }}>Reviews</NavLink></li>
                </ul>

                <Suspense fallback={<h2>Загружается...</h2>}>
                    <Switch>
                        <Route path={`${url}/cast`} exact>
                            <Cast casts={casts}/>
                        </Route>
                        <Route path={`${url}/reviews`}>
                            <Reviews reviews={reviews} exact/>
                        </Route>
                        {!movie && <Redirect to="/" /> }
                        {/*<Route path={`${url}/:value`} to="/"component={HomePage}/>*/}
                        {/*<Route path={`${url}/:value`} to="/"component={HomePage}/>*/}
                        {/*<Route path="*" component={HomePage} exact/>*/}
                    </Switch>
                </Suspense>
            </section>
        </>
    );
}

MovieDetailsPage.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default MovieDetailsPage;