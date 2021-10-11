import {useState, useEffect} from "react";
import {NavLink, useRouteMatch} from "react-router-dom";
import moviesApi from "../../services/servicesApi"
import style from "./HomePage.module.scss";
import PageHeading from "../../components/PageHeading/PageHeading";

const HomePage = () => {
    // const {url} = useRouteMatch();
    // console.log(url)
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesApi.fetchGetMediaTrending().then(setMovies);
    }, []);

    console.log(movies)

    const {results} = movies;

    return (
        <>
            <PageHeading text="Trending today"/>

            {results && (
                <ul>
                    {results.map(item => (
                        <li key={item.id} className={style.itemFilm}>
                            <NavLink to={`/movies/${item.id}`} className={style.itemLink}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default HomePage;