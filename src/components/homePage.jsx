import HeroSection from './heroSection'
import AboutTreeLink from './aboutTreeLink'
import HowItStarted from './howItStarted'
import ProjectGoal from './ProjectGoal'
import Footer from './footer'

import Sytle from '../style/homePage.css'
import React from 'react'

export default () => {
    return(
        <>
            <link rel="stylesheet" href="" />
            <style src={Sytle}></style>
            <HeroSection />
            <nav className='homePage-Container'>
                <AboutTreeLink />
                <HowItStarted />
                <ProjectGoal/>
            </nav>
            <Footer />
        </>
    )
}