import React from 'react'
import About from '../components/About/About'
import Hero from "../components/Hero/Hero"
import Resources from '../components/Resources/Resources'
import Gallery from '../components/Gallery/Gallery'
import Team23_24 from '../components/Team/Team_2023_2024/Team23_24'
import Achievements from '../components/Achievements/Achievements'
import Events from '../components/Events/Events'
import Contact from '../components/Contact/Contact'
const Home = () => {
    return (
        <>

            <Hero />
            <About />
            {/* <Gallery /> */}
           
            <Achievements />
            <Events/>
            {/* <Resources /> */}
            {/* <Team23_24 /> */}
            <Contact/>
        </>
    )
}

export default Home





