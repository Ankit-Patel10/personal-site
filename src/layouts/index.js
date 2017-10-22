import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import withRouter from 'react-router-dom/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

import '../styles/style.css'
import '../styles/queries.css'
import '../styles/animations.css'

class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const {children} = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}

const TemplateWrapper = ({ children, location }) =>
    <div>
      <Helmet
        title='Edwin Zhang'
        meta={[
          { name: 'description', content: 'Software engineering student at the University of Waterloo.' },
          { name: 'keywords', content: 'software, engineer, waterloo, student' },
        ]}
      />
  		<div className='content'>
  	    <Header />
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="pages"
            timeout={{ enter: 100, exit: 100 }}
          >
            <TransitionHandler
              location={location}
            >
      	    <div className='children' style={{
      	        margin: '0 auto',
      	        maxWidth: 1000,
      	        padding: '0px 1.0875rem 1.45rem',
      	        paddingTop: 0,
      	      }}>
      	      { children() }
      	    </div>
            </TransitionHandler>
          </CSSTransition>
        </TransitionGroup>
  		</div>
  		<Footer />
    </div>


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withRouter(TemplateWrapper)
