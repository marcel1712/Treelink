import react from "react";
import memberContentStyle from "../style/memberContent.css"
import AddButton from './addButton'


export default () => {
    return(
        <nav className="MemberContent">
            <AddButton text="Adicionar Membro "/>
            <ul className="memberList">
                <li>Peter</li>
                <li>May</li>
                <li>Ben</li>
            </ul>
        </nav>
    )   
}