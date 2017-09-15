import React from 'react'

class ResumeContact extends React.Component {
  render() {
    return (
      <div>
        <a className='resume-link' href={this.props.link} alt={this.props.alt} target='_blank'>
          <i className={this.props.icon}></i>
          <p>{this.props.text}</p>
        </a>
      </div>
    );
  }
}

export default ResumeContact
