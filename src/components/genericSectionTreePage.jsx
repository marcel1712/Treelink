import react from "react";
import AddButton from "./addButton";
import familySectionStyle from "../style/genericSectionTreePage.css"

export default (props) => {
    return(
        <nav className="Container-familySection">
            <nav className="Title-familySection">
                <h1>{props.title}</h1>
            </nav>
            {props.children}
        </nav>
    )
}