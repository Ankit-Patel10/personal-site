import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/Project.js'

class ProjectsPage extends React.Component {
  render() {
    { /*

    const messengerDesc =
      <p>
        A
        <span className='emphasis'> Chrome extension </span>
        built with
        <span className='emphasis'> javascript </span>
        and the
        <span className='emphasis'> MathJax </span>
        library that allows
        <span className='emphasis'> LaTeX </span>
        equations to be rendered directly inside
        Facebook Messenger.
      </p>

    const ayaDesc =
      <p>
        A robotic head powered by a Raspberry Pi that uses
        <span className='emphasis'> Amazon Web Services </span>
        for image recognition and text-to-speech output.
        Developed
        <span className='emphasis'> Python </span>
        backend and used
        <span className='emphasis'> Tensorflow </span>
        to create a custom algorithm for determining label relevancy.
      </p>
      */ }

    return (
      <div className='main projects'>
        <div className='title'>
          <h1>Projects</h1>
        </div>
        <div className='project-row'>
          <Project
            name='Aya'
            href='http://devpost.com/software/aya'
            caption='Robotic head with facial recognition.'
          />
          <Project
            name='Automatic Cannon'
            href='http://github.com/edwinzhng/automatic-cannon'
            caption='Self-aiming projectile launching cannon.'
          />
        </div>
        <div className='project-row'>
          <Project
            name='Messenger LaTeX'
            href='http://devpost.com/software/messenger-latex'
            caption='Renders LaTeX in Facebook Messenger.'
          />
          <Project
            name='Trendcast'
            href='http://devpost.com/software/trendcast'
            caption='Technology trend popularity predictor.'
          />
        </div>
        <Link to='/'><button className='homelink button-purple'>Home</button></Link>
      </div>
    );
  }
}

export default ProjectsPage
