import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project.js'

class ProjectsPage extends React.Component {
  render() {
    return (
      <div className='main projects'>
        <div className='title'>
          <h1>Projects</h1>
        </div>
        <div className='project-row'>
          <Project
            name='Aya'
            classes='aya link-box'
            href='http://devpost.com/software/aya'
            caption='Robotic head with facial recognition.'
          />
          <Project
            name='Automatic Cannon'
            classes='cannon link-box'
            href='http://github.com/edwinzhng/automatic-cannon'
            caption='Self-aiming projectile launching cannon.'
          />
        </div>
        <div className='project-row'>
          <Project
            name='Messenger LaTeX'
            classes='latex link-box'
            href='http://devpost.com/software/messenger-latex'
            caption='Chrome extension to render LaTeX in Messenger.'
          />
          <Project
            name='Trendcast'
            classes='trendcast link-box'
            href='http://devpost.com/software/trendcast'
            caption='Technology trend popularity predictor.'
          />
        </div>
        <Link to='/'><button className='button-purple'>Home</button></Link>
      </div>
    );
  }
}

export default ProjectsPage
