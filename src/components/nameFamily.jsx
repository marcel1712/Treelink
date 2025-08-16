import react from "react";
import StyleNameFamily from "../style/StyleNameFamily.css"

export default (props) => {
    return (
        <nav className="FamilyElement">
            <p>{props.text}</p>
        </nav>
    )
}