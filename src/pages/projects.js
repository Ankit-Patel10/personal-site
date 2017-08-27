import React from 'react'

import messengerLatexLogo from '../../public/static/messenger-latex.png'

const ProjectsPage = () =>
  <div className='projects'>
    <div className='project-wrapper'>
      <div className='img-wrapper'>
        <a className='project-link' href='https://github.com/hermord/messenger-latex' target='_blank'>
          <img className='project-img' src={ messengerLatexLogo } alt='Messenger Latex Logo'/>
        </a>
      </div>
      <div className='project-text'>
        <h2>Messenger LaTeX</h2>
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
      </div>
    </div>
  </div>

export default ProjectsPage
