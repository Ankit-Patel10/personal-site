import React from 'react'
import Link from 'gatsby-link'

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="main notfound home">
        <h2>Oops, this page doesn't exist!</h2>
        <Link to='/'><button className='homelink button-blue'>Home</button></Link>
      </div>
    );
  }
}

export default NotFoundPage
