import React from 'react'
import Link from 'gatsby-link'

const ResumePage = () =>
  <div className='resume'>
    <div className='resume-left'>
      <div className='section'>
        <h3>Education</h3>
        <div className='span'>
          <span className='t1'>University of Waterloo</span>
          <span className='t2'>Waterloo, Canada</span>
        </div>
        <div className='span'>
          <span className='t3'>Bachelor of Software Engineering</span>
          <span className='t4'>Sept 2017 - Present</span>
        </div>
        <div className='span'>
          <span className='t1'>Western Canada High School</span>
          <span className='t2'>Calgary, Canada</span>
        </div>
        <div className='span'>
          <span className='t3'>International Baccalaureate Diploma</span>
          <span className='t4'>Sept 2014 - Jun 2017</span>
        </div>
        <p>
          96% Cumulative Average <span className='slash'>//</span> Grade
          12 Male Citizen of the Year
        </p>
      </div>
      <div className='section projects'>
        <h3>Projects</h3>
        <div className='span'>
          <span className='t1'>React Ticket to Ride</span>
          <span className='t2'>Personal</span>
        </div>
        <div className='span'>
          <span className='t3'>
            <a href='https://github.com/cloudedwindow/react-ticket-to-ride'
             target='_blank'>
              github.com/cloudedwindow/react-ticket-to-ride
            </a>
          </span>
          <span className='t4'>Aug 2017</span>
        </div>
        <p>
          A clone of the popular board game built using React with the Meteor
          framework. <i>Currently a work in a progress.</i>
        </p>
        <div className='span'>
          <span className='t1'>Messenger LaTeX</span>
          <span className='t2'>MHacks Nano</span>
        </div>
        <div className='span'>
          <span className='t3'>
            <a href='https://devpost.com/software/messenger-latex' target='_blank'>
              devpost.com/software/messenger-latex
            </a>
          </span>
          <span className='t4'>Jun 2017</span>
        </div>
        <p>
          A Chrome extension built with Javascript and MathJax that allows
          LaTeX to be sent through Facebook Messenger featuring a live preview,
          click to copy text, and PNG rendering of equations.
        </p>
        <div className='span'>
          <span className='t1'>Study Space Executive</span>
          <span className='t2'>High School</span>
        </div>
        <div className='span'>
          <span className='t3'>
            <a href='http://studyspacewchs.com' target='_blank'>
              studyspacewchs.com
            </a>
          </span>
          <span className='t4'>Nov 2016 - May 2017</span>
        </div>
        <p>
          Developed a simple website using HTML and CSS for my high school’s
          tutoring club that hosts study packets for various courses in the
          maths and sciences. Organized and led weekly executive meetings and
          tutoring sessions for over 100 students.
        </p>
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
        <p> C++ <span className='slash'>//</span> Java <br />
            HTML <span className='slash'>//</span> CSS <span className='slash'>//</span>
            Javascript <br />
            React <span className='slash'>//</span> Node <span className='slash'>//</span> Meteor
        </p>
        <div className='t1'>Academically Exposed</div>
        <p>
          MATLAB <span className='slash'>//</span> Octave
        </p>
        <div className='t1'>Prior Experience</div>
        <p>
          Solidity <span className='slash'>//</span> Ethereum <br />
          Unreal Engine 4 <span className='slash'>//</span> Blender 3D
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

export default ResumePage
