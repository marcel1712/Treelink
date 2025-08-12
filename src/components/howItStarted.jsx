import React from "react";
import HowItStartedStyle from '../style/howItStarted.css'

export default () => {
    return (
        <>
            <nav className="container-HowItStarted">
                <h1>Como nasceu a <br />ideia</h1>
                <p>O projeto surgiu como um <span>desafio pessoal</span>: aplicar e <br />testar, na prática, tudo o que aprendi até agora sobre <br /><span className="blueSpan">React</span> e desenvolvimento web.</p>
                <p> Mais do que um simples exercício, o TreeLink se tornou <br />uma forma divertida de passar o tempo e <span>explorar <br />como histórias se entrelaçam ao longo das gerações.</span></p>
            </nav>

            <hr className="divider"></hr>
        </>
    )
}