import {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import moviesApi from "../../services/servicesApi"
import style from "./HomePage.module.scss";
import PageHeading from "../../components/PageHeading/PageHeading";

const HomePage = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesApi
            .fetchGetMediaTrending()
            .then(setMovies)
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <PageHeading text="Trending today"/>

            {movies.results && (
                <ul>
                    {movies.results.map(item => (
                        <li key={item.id} className={style.itemFilm}>
                            <NavLink
                                to={{
                                    pathname: `/movies/${item.id}`,
                                    state: location,
                                }}
                                className={style.itemLink}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default HomePage;