import React from "react";
import AboutTreeLinkStyle from '../style/aboutTreeLink.css'
import appImage from '../imgs/appImage.png'

export default () => {
    return (
        <>
            <nav className="container-AboutTreeLink">
                <nav className="title-AboutTreeLink">
                    <h1>Sobre a <span>TreeLink</span></h1>
                    <p>O TreeLink é um espaço para quem gosta de explorar <span>histórias</span> e <br/><span>conexões familiares</span> de forma criativa.</p>
                </nav>
                <nav className="main-AboutTreeLink">
                    <nav className="text-AboutTreeLink">
                        <p>Crie árvores genealógicas <br />únicas — sejam elas baseadas<br /> em famílias reais, fictícias ou <br />até mesmo personagens de <br />universos que você gosta.</p>
                    </nav>
                    <nav className="img-AboutTreeLink">
                        <img src={appImage} alt="appImage" />
                    </nav>
                </nav>
                <hr className="divider"></hr>
            </nav>
        </>
    );
}