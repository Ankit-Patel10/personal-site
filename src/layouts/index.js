import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

import '../styles/style.css'
import '../styles/queries.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title='Edwin Zhang'
      meta={[
        { name: 'description', content: 'Software engineering student at the University of Waterloo.' },
        { name: 'keywords', content: 'software, engineer, blockchain, machinelearning, webdev, waterloo, student' },
      ]}
    />
		<div className='content'>
	    <Header />
	    <div className='children' style={{
	        margin: '0 auto',
	        maxWidth: 1000,
	        padding: '0px 1.0875rem 1.45rem',
	        paddingTop: 0,
	      }}>
	      { children() }
	    </div>
		</div>
		<Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
