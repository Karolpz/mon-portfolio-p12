import React from 'react'
import Menu from '../../containers/Menu/Menu'
import AboutMe from '../../containers/AboutMe/AboutMe'
import Skills from '../../containers/Skills/Skills'
import Projects from '../../containers/Projects/Projects'
import Form from '../../containers/Form/Form'

const Home = () => {
  return (
    <main>
        <Menu />
        <AboutMe />
        <Skills />
        <Projects />
        <Form />
    </main>
  )
}

export default Home