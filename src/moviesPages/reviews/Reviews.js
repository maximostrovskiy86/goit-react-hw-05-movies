const Reviews = ({reviews}) => {
    console.log(reviews)
    const {results} = reviews;
    return (
        <>
            {results.length > 0 ?
                <ul>
                    {results.map(item => (
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

export default Reviews;