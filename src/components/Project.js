import React from 'react'

class Project extends React.Component {
  handleHoverOn() {
    this.props.style={
      backgroundColor: '#000',
      opacity: '0.5'
    }
  }
  handleHoverOff() {
    this.props.style={

    }
  }
  render() {
    const projectText =
      <div className='project-text'>
        <h2>{this.props.name}</h2>
        {this.props.desc}
      </div>

    return (
      <div className='img-wrapper'>
        <a className='project-link'
          href={this.props.link}
          target='_blank'
          style={this.props.style}>
          <img
            className='project-img'
            onMouseEnter={this.handleHoverOn}
            onMouseLeave={this.handleHoverOff}
            src={this.props.img}
            alt={this.props.alt}
            style={this.props.style}
          />
        </a>
      </div>
    );
  }
}

export default Project
