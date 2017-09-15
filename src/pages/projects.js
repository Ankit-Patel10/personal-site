import React from 'react'
import Project from '../components/Project.js'

import messengerLatexLogo from '../img/messenger-latex.png'

class ProjectsPage extends React.Component {
  render() {
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

    return (
      <div>
        <Project
          name='Messenger LaTeX'
          desc={messengerDesc}
          link='http://devpost.com/software/messenger-latex'
          img={messengerLatexLogo}
          alt='Messenger LaTeX Logo'
        />
      </div>
    );
  }
}

export default ProjectsPage
