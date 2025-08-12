import React from "react";
import whiteLogo from '../imgs/white-Logo.png'
import svgDownArrow from '../imgs/downarrow.svg'
import HeroSectionStyle from '../style/heroSection.css'

export default () => {
    return(
        <>
            <nav className="HeroSection">
                <nav className="top-Herosection">
                    <img src={whiteLogo} alt="logo" className="logo-treeLink" />
                </nav>
                <nav className="center-Herosection">
                    <h1>Crie <span>árvores</span><br></br> genealógicas <span>criativas</span></h1>
                    <nav className="button-Herosection">
                        <a href="">
                        <p>Começar agora</p>
                        </a>
                    </nav>
                </nav>
                <nav className="bottom-Herosection">
                    <img src={svgDownArrow} alt="downArrow" />
                </nav>
            </nav>
        </>
    );
}