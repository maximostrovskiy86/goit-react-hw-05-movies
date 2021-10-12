import PropTypes from "prop-types";

const Reviews = ({reviews}) => {
    console.log(reviews)
    return (
        <>
            {reviews.results.length > 0 ?
                <ul>
                    {reviews.results.map(item => (
                        <li key={item.id}>
                            <h4>Author: {item.author}</h4>
                            <p>{item.content}</p>
                        </li>
                    ))}
                </ul>
                : <p>Not reviews !!!</p>
            }
        </>
    );
}

Reviews.propTypes = {
    results: PropTypes.shape({
        cast: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }))
    })
}

export default Reviews;