import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/ProjectPage/Projects'
import Footer from '../components/Footer'
import { projectCardsData } from '../../mockData'

const ProjectPage = () => {
  return (
    <div>
      <Navbar/>
      <Projects data={projectCardsData} />
      <Footer/>
    </div>
  )
}

export default ProjectPage