import react, { useDeferredValue } from "react";
import addButtonSyle from '../style/addButtonSyle.css'
import plusSign from '../imgs/plus.png'

export default props => {
    return(
        <nav className="addButton">
            <img src={plusSign} alt="addSign" />
            <p>{props.text}</p>
        </nav>
    );
}