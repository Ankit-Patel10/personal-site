import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import withRouter from 'react-router-dom/withRouter'
import Footer from '../components/Footer.js'
import Canvas from '../components/Canvas.js'

import '../styles/style.css'
import '../styles/queries.css'

const TemplateWrapper = ({ children, location }) =>
  <div>
    <Helmet
      title='Edwin Zhang'
      meta={[
        { name: 'description', content: 'Software engineering student at the University of Waterloo.' },
        { name: 'keywords', content: 'software, engineer, waterloo, student' },
        { name: 'viewport', content: 'width=device-width' }
      ]}
    />
    <Canvas />
    <div className='children'>
  	      { children() }
    </div>
		<Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withRouter(TemplateWrapper)
