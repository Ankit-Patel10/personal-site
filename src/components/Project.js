import React from 'react'

class Project extends React.Component {
  render() {
    const projectText =
      <div className='project-text'>
        <h2>{this.props.name}</h2>
        {this.props.desc}
      </div>

    return (
      <div className='img-wrapper'>
        <a className='project-link' href={this.props.link} target='_blank'>
          <img
            className='project-img'
            src={this.props.img}
            alt={this.props.alt}
          />
        </a>
      </div>
    );
  }
}

export default Project
