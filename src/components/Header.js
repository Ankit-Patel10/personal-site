import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Header
