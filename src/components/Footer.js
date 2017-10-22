import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
       <a href='https://github.com/edwinzhng' target='_blank'>
         <i className='icon ion-social-github transition'></i>
       </a>
       <a href='https://linkedin.com/in/edwin-zhang/' target='_blank'>
         <i className='icon ion-social-linkedin transition'></i>
       </a>
       <a href='mailto:edwinzhang64@gmail.com'>
         <i className='icon ion-paper-airplane transition'></i>
       </a>
      </div>
    );
  }
}

export default Footer
