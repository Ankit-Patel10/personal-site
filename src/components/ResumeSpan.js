import React from 'react'

class ResumeSpan extends React.Component {
  render() {
    return (
      <div>
        <div className='span'>
          <span className='t1'>{this.props.name}</span>
          <span className='t2'>{this.props.location}</span>
        </div>
        <div className='span'>
          <span className='t3'>
            <a classname='resume-link' href={this.props.link} target='_blank'>
              {this.props.text}
            </a>
          </span>
          <span className='t4'>{this.props.date}</span>
        </div>
        <ul className='description'>
            {this.props.desc}
        </ul>
      </div>
    );
  }
}

export default ResumeSpan
