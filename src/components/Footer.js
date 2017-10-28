import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer' style={{
        textAlign: 'center',
        height: '90px',
        marginBottom: '20px'
      }}>
       <a href='https://github.com/edwinzhng' target='_blank' className='git'>
         <i className='icon git ion-social-github transition'></i>
       </a>
       <a href='https://linkedin.com/in/edwin-zhang/' target='_blank' className='linkedin'>
         <i className='icon ion-social-linkedin transition'></i>
       </a>
       <a href='mailto:edwinzhang64@gmail.com' className='mail'>
         <i className='icon ion-paper-airplane transition'></i>
       </a>
      </div>
    );
  }
}

export default Footer
