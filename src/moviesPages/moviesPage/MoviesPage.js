import style from "./MoviesPage.module.scss";
import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import moviesApi from "../../services/servicesApi";
import {Link, useLocation, useHistory, useRouteMatch} from "react-router-dom";
import PageHeading from "../../components/PageHeading/PageHeading";
import queryString from "query-string";

const MoviesPage = () => {
    const {url} = useRouteMatch();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const location = useLocation();
    const history = useHistory();

    const handleChange = (e) => setQuery(e.target.value);

    const parsed = queryString.parse(location.search);

    useEffect(() => {
        if (parsed.query) {
            moviesApi
                .fetchGetMediaSearch(parsed.query)
                .then(setMovies)
                .catch(error => console.log(error));
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        if (query.trim() === '') {
            alert("Введите название фильма")
            return;
        }

        history.push({...location, search: `query=${query}`});
        moviesApi
            .fetchGetMediaSearch(query)
            .then(setMovies)
            .catch(error => console.log(error));

        setQuery('')
    }

    return (
        <>
            <PageHeading text="List of found movies"/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={style.inputSearch}
                    onChange={handleChange}
                    value={query}
                />
                <button type="submit" className={style.button}>Search</button>
            </form>
            {movies.results && (
                <ul className={style.moviesList}>
                    {movies.results.map(movie => (
                        <li key={movie.id} className={style.itemFilm}>
                            <Link
                                to={{
                                    pathname: `${url}/${movie.id}`,
                                    state: location,
                                }}
                                className={style.itemLink}
                            >{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

MoviesPage.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default MoviesPage;