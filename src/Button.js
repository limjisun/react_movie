import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.btn}>{text}</button>
}

export default Button;

Button.prototypes={
    text:propTypes.string.isRequired,
}