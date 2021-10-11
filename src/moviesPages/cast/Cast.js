// import castApi from "../../services/servicesApi"
// import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Cast = ({casts}) => {
    console.log(casts)
    const {castId} = useParams();
    // const cast = casts.find(cast => cast.id === Number(castId));
    // const [casts, setCast] = useState(null);
    console.log(castId)
    // console.log(cast)

    // useEffect(() => {
    //     castApi.getMediaMovieCast(movieId).then(setCast)
    // }, [movieId])
    return (
        <>
            {casts && (
                <ul>
                    {casts.cast.map(item => (
                    // console.log(item)
                    <li key={casts.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
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

export default Cast;