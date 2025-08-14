import React from "react";
import HeaderSytle from "../style/header.css"
import BackArrow from '../imgs/backarrow.png'

export default () => {
    return(
        <nav className="Header">
            <nav className="returnArrow">
                <a href="/"><img src={BackArrow} alt="" /></a>
            </nav>
            <nav className="logo-Header"><h1>TreeLink</h1></nav>
        </nav>
    );
}