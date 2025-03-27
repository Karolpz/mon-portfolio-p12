import React from 'react'
import Menu from '../../containers/Menu/Menu'
import AboutMe from '../../containers/AboutMe/AboutMe'
import Skills from '../../containers/Skills/Skills'
import Projects from '../../containers/Projects/Projects'
import Form from '../../containers/Form/Form'
import Footer from '../../containers/Footer/Footer'

const Home = () => {
  return (
    <main>
        <Menu />
        <AboutMe />
        <Skills />
        <Projects />
        <Form />
        <Footer />
    </main>
  )
}

export default Home