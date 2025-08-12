import React from "react";
import FooterSyle from '../style/footer.css'
import whiteLogo from '../imgs/white-Logo.png'

export default () => {
    return (
        <nav className="footer">
            <img src={whiteLogo} alt="white-Logo" />
            <hr className="divider-Vertical"></hr>
            <h1 className="Logo-Athor">Marcel <br /> Henrique</h1>
        </nav>
    )
}