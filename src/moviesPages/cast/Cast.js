import PropTypes from 'prop-types';
import style from "./Cast.module.scss";
import noPhoto from "../../images/nophoto.jpeg";

const Cast = ({casts}) => {
    return (
        <>
            {casts && (
                <ul className={style.cast}>
                    {casts.cast.map(item => (
                        <li key={item.id}>
                            <img
                                src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : noPhoto}
                                alt={item.original_name}
                                width="200"
                                height="300"
                            />
                            <p>{item.original_name}</p>
                            <p>character: {item.character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

Cast.propTypes = {
    casts: PropTypes.shape({
        cast: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            profile_path: PropTypes.string,
            original_name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
        }))
    })
}

export default Cast;