import style from "./MoviesPage.module.scss"
import {useState, useEffect} from "react";
import moviesApi from "../../services/servicesApi";
import {Link, useHistory, useRouteMatch, useLocation} from "react-router-dom";

const MoviesPage = () => {
    const {url} = useRouteMatch();
    const history = useHistory();
    // console.log(history)
    const location = useLocation();
    console.log(location.search)
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    console.log(location.search === query)

    useEffect(() => {
        if (history.location.search === '') {
            setMovies([]);
        }
    }, [history.location]);


    const handleChange = (e) => setQuery(e.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        // history.push({
        //     ...location,
        //     search: `queryString=${query}`
        // })

        // history.push(location.state.?from || '/')

        if (query.trim() === '') {
            alert("Введите название фильма")
            return;
        }
        history.push({...location, search: `?q=${query}`});

        moviesApi
            .fetchGetMediaSearch(query)
            .then(setMovies)
            .catch(error => console.log(error));
        // setQuery(query);

        // const urlQuery = `${url}?query=${query}`
        //
        //
        // console.log(urlQuery)
        // history.push(urlQuery)

        setQuery('')
    }

    const {results} = movies;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={style.inputSearch}
                    onChange={handleChange}
                    value={query}
                />
                <button type="submit" className={style.button}>Search</button>
            </form>
            {results && (
                <ul>
                    {results.map(movie => (
                        <li key={movie.id} className={style.itemFilm}>
                            <Link to={`${url}/${movie.id}`} className={style.itemLink}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default MoviesPage;