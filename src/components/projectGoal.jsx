import React from "react";
import projectGoalStyle from '../style/projectGoal.css'
import greenHeart from '../imgs/heart.png'
import authorsFoto from '../imgs/authorsFoto_adjusted.png'
import linkedinLogo from '../imgs/linkedinlogo.png'
import instagramLogo from '../imgs/logoInstagram.jpg'
import githubLogo from '../imgs/githublogo.png'

export default () => {
    return(
        <nav className="container-ProjectGoal">
            <nav className="projectGoal">
                <nav className="title">
                    <h1>Meu objetivo<br /> com o projeto</h1>
                </nav>
                <nav className="text-ProjectGoal">
                    <nav className="paragraph-ProjectGoal">
                        <p>Além de oferecer uma experiência<br /> interativa para quem gosta do<br /> tema, o <span>TreeLink</span> também é o meu<br /> laboratório de programação.</p>
                        <p>Cada nova funcionalidade<br /> representa um passo no meu<br /> aprendizado, e cada árvore criada<br /> é uma nova inspiração para<br /> continuar melhorando o projeto.</p>
                    </nav>
                    <nav className="img-projectGoal">
                        <img src={greenHeart} alt="greenheart" className="float"/>
                    </nav>
                </nav>
            </nav>
            <nav className="ContactSection">
                <nav className="authorImage-Container">
                    <img src={authorsFoto} alt="AuthorImage" />
                </nav>
                <nav className="text-ContactSection">
                    <p>Quer acompanhar de perto a<br /> evolução do projeto e trocar<br /> ideias?</p>
                    <nav className="link-SocialMidia">
                        <p>@marcel_hrb</p>
                        <a href="https://github.com/marcel1712"><img src={githubLogo} alt="" /></a>
                        <a href="https://www.linkedin.com/in/marcel-henrique-rodrigues-batista-846180226/?original_referer="><img src={linkedinLogo} alt="" /></a>
                        <a href="https://www.instagram.com/marcel_hrb/"><img src={instagramLogo} alt="" /></a>
                    </nav>
                </nav>

            </nav>
        </nav>
    )
}