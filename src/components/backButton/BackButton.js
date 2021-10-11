import {useHistory, useRouteMatch} from "react-router-dom";

const BackButton = ({onBack}) => {
    let history = useHistory();
    const {url} = useRouteMatch();
    // console.log(url)

    console.log(url, history)

    // function handleClick() {
    //     history.push("/movies");
    //     // history.goBack()
    //     // history.push(location.state.?from || '/')
    //
    // }

    return (
        <button type="button" onClick={onBack}>
            Go back
        </button>
    );
}

export default BackButton;