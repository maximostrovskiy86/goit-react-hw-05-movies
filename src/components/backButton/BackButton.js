import style from "./BackButton.module.scss";
import PropTypes from "prop-types";

const BackButton = ({onBack}) => {
    return (
        <button type="button" className={style.button} onClick={onBack}>
            &lArr; Go back
        </button>
    );
}

BackButton.propTypes = {
    onBack: PropTypes.func.isRequired,
}

export default BackButton;