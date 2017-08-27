import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './css/style.css'
import './css/queries.css'

const Header = () =>
	<div className='header'>
		<div className ='headerName'
			style={{
				marginTop: '75px'
			}}>
			<h1>Edwin Zhang</h1>
		</div>
		<div className='nav'
			style={{
				marginBottom: '60px'
			}}>
			<Link exact to='/' activeClassName='selected' className='transition'>
				<i className='icon ion-android-home'></i>
				<span>Home</span>
			</Link>
			<Link exact to='/projects/' activeClassName='selected' className='transition'>
				<i className='icon ion-android-bulb'></i>
				<span>Projects</span>
			</Link>
			<Link exact to='/resume/' activeClassName='selected' className='transition'>
				<i className='icon ion-document'></i>
				<span>Resumé</span>
			</Link>
		</div>
	</div>

	const Footer = () =>
	<div className='footer'>
		<a href='https://github.com/cloudedwindow' target='_blank'>
			<i className='icon ion-social-github transition'></i>
		</a>
		<a href='https://linkedin.com/in/edwin-zhang/' target='_blank'>
			<i className='icon ion-social-linkedin transition'></i>
		</a>
		<a href='mailto:edwinzhang64@gmail.com'>
			<i className='icon ion-paper-airplane transition'></i>
		</a>
	</div>

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
	      {children()}
	    </div>
		</div>
		<Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
