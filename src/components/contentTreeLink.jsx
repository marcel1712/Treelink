import react from "react";
import StyleContentTreeLink from '../style/contentTreeLink.css'
import AddButton from './addButton'
import NameFamily from "./nameFamily";


export default () => {
    return(
        <nav className="ContentTreeLink">
            <AddButton text="Adicionar Família" />
            <nav className="Family-List">
                <NameFamily text="Parker" />
            </nav>
        </nav>
        
    )
}