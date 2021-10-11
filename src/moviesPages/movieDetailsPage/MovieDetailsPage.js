import style from "./MovieDetailsPage.module.scss";
import queryApi from "../../services/servicesApi";
import {Route, Link, useParams, useRouteMatch, useHistory, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import Cast from "../cast/Cast";
import BackButton from "../../components/backButton/BackButton";
import Reviews from "../reviews/Reviews";

const MovieDetailsPage = () => {
    const {url, path} = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

    const [movie, setMovie] = useState(null);
    const [casts, setCast] = useState(null);
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    const onBack = () => {
        history.push(location.state.from);
    };

    useEffect(() => {
        queryApi.getMediaMovieDetails(movieId).then(setMovie);
        queryApi.getMediaMovieCast(movieId).then(setCast);
        queryApi.getMediaMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <>
            <BackButton onBack={onBack}/>
            <section>
                {movie && (
                    <div className={style.book}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
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
                <ul>
                    <li><Link to={`${url}/cast`}>Cast</Link></li>
                    <li><Link to={`${url}/reviews`}>Reviews</Link></li>
                </ul>
            </section>
            <Route path={`${url}/cast`}>
                <Cast casts={casts}/>
            </Route>
            <Route path={`${url}/reviews`}>
                <Reviews reviews={reviews}/>
            </Route>
        </>
    );
}

export default MovieDetailsPage;