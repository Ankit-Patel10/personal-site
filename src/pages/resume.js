import React from 'react'

const slash = <span className='slash'>&nbsp;//&nbsp;</span>

function ResumeSpan(props) {
  return (
    <div>
      <div className='span'>
        <span className='t1'>{props.name}</span>
        <span className='t2'>{props.location}</span>
      </div>
      <div className='span'>
        <span className='t3'>
          <a href={props.ref} target='_blank'>
            {props.link}
          </a>
        </span>
        <span className='t4'>{props.date}</span>
      </div>
      {props.desc}
    </div>
  );
}

class ResumePage extends React.Component {
  render() {
    return (
      <div className='resume'>
        <div className='resume-left'>
          <div className='section'>
            <h3>Education</h3>
            <ResumeSpan
              name='University of Waterloo'
              location='Waterloo, Canada'
              link='Bachelor of Software Engineering'
              date='Sept 2017 - Present'
            />
            <ResumeSpan
              name='Western Canada High School'
              location='Calgary, Canada'
              link='International Baccalaureate Diploma'
              date='Sept 2014 - Jun 2017'
              desc={
                <p>
                  <span>96% Cumulative Average</span>
                  {slash}
                  <span>Grade 12 Male Citizen of the Year</span>
                </p>
              }
            />
          </div>
          <div className='section projects'>
            <h3>Projects</h3>
            <ResumeSpan
              name='React Ticket to Ride'
              location='Personal'
              ref='https://github.com/cloudedwindow/react-ticket-to-ride'
              link='github.com/cloudedwindow/react-ticket-to-ride'
              date='Aug 2017'
              desc={
                <p>
                  A clone of the popular board game built using React with the Meteor
                  framework. <i>Currently a work in a progress.</i>
                </p>
              }
            />
            <ResumeSpan
              name='Messenger LaTeX'
              location='MHacks Nano'
              ref='https://devpost.com/software/messenger-latex'
              link='devpost.com/software/messenger-latex'
              date='Jun 2017'
              desc={
                <p>
                  A Chrome extension built with Javascript and MathJax that allows
                  LaTeX to be sent through Facebook Messenger featuring a live preview,
                  click to copy text, and PNG rendering of equations.
                </p>
              }
            />
            <ResumeSpan
              name='Study Space Executive'
              location='High School'
              ref='http://studyspacewchs.com'
              link='studyspacewchs.com'
              date='Nov 2016 - May 2017'
              desc={
                <p>
                  Developed a simple website using HTML and CSS for my high school’s
                  tutoring club that hosts study packets for various courses in the
                  maths and sciences. Organized and led weekly executive meetings and
                  tutoring sessions for over 100 students.
                </p>
              }
            />
          </div>
        </div>

        <div className='resume-right'>
          <div className='section contact'>
            <h3>Contact</h3>
            <div>
              <a href='https://github.com/cloudedwindow' alt='GitHub' target='_blank'>
                <i className='icon ion-social-octocat'></i>
                <p>github.com/cloudedwindow</p>
              </a>
            </div>
            <div>
              <a href='https://github.com/cloudedwindow' alt='LinkedIn' target='_blank'>
                <i className='icon ion-social-linkedin-outline'></i>
                <p>linkedin.com/in/edwin-zhang</p>
              </a>
            </div>
            <div>
              <a href='https://github.com/cloudedwindow' alt='Devpost' target='_blank'>
                <i className='icon ion-code'></i>
                <p>devpost.com/edwinzhang</p>
              </a>
            </div>
            <div>
              <a href='mailto:edwin.zhang@uwaterloo.ca' alt='Email'>
                <i className='icon ion-android-mail'></i>
                <p>edwin.zhang@uwaterloo.ca</p>
              </a>
            </div>
          </div>
          <div className='section skills'>
            <h3>Skills</h3>
            <div className='t1'>Proficient</div>
            <p> C++{slash}Java<br />
                HTML{slash}CSS{slash}
                Javascript<br />
                React{slash}Node{slash}Meteor
            </p>
            <div className='t1'>Academically Exposed</div>
            <p>
              MATLAB{slash}Octave
            </p>
            <div className='t1'>Prior Experience</div>
            <p>
              Solidity{slash}Ethereum <br />
              Unreal Engine 4{slash}Blender 3D
            </p>
          </div>
          <div className='section coursework'>
            <h3>Relevant Coursework</h3>
            <p>
              Algorithms I & II by <i>Princeton</i> <br />
              Machine Learning by <i>Stanford</i> <br />
              Complete UE4 Development Course by <i>Ben Tristem</i> <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage
