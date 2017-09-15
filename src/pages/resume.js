import React from 'react'
import ResumeSpan from '../components/ResumeSpan.js'
import ResumeContact from '../components/ResumeContact.js'

const slash = <span className='slash'>&nbsp;//&nbsp;</span>

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
              text='Bachelor of Software Engineering'
              date='Sept 2017 - Present'
            />
            <ResumeSpan
              name='Western Canada High School'
              location='Calgary, Canada'
              text='International Baccalaureate Diploma'
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

          {/*<div className='section'>
            <h3>Experience</h3>
            <ResumeSpan
              name='Waterloop'
              location='Calgary, Canada'
              text='Web Development Team'
              date='Sept 2017 - Present'
              desc={
                <p>
                  Developed a virtual rendering of hyperloop pod design that
                  can be viewed through web browsers.
                </p>
              }
            />
          </div>*/}

          <div className='section projects'>
            <h3>Projects</h3>
            <ResumeSpan
              name='React Ticket to Ride'
              location='Personal'
              link='https://github.com/cloudedwindow/react-ticket-to-ride'
              text='github.com/cloudedwindow/react-ticket-to-ride'
              date='Sept 2017'
              desc={
                <p>
                  A clone of the popular board game built using React and
                  Meteor.
                </p>
              }
            />
            {/*<ResumeSpan
              name='Android App'
              location='MHacks X'
              link='https://devpost.com/software/mhacks-x'
              text='devpost.com/software/mhacks-x'
              date='Sept 2017'
              desc={
                <p>
                   An android app.
                </p>
              }
            />*/}
            <ResumeSpan
              name='Aya'
              location='Hack the North'
              link='https://devpost.com/software/aya'
              text='devpost.com/software/aya'
              date='Sept 2017'
              desc={
                <p>
                   A robotic head powered by a Raspberry Pi that uses AWS for
                   image recognition and text-to-speech output. Developed Python
                   backend and used TensorFlow to create a custom algorithm for
                   determining label relevancy.
                </p>
              }
            />
            <ResumeSpan
              name='Messenger LaTeX'
              location='MHacks Nano'
              link='https://devpost.com/software/messenger-latex'
              text='devpost.com/software/messenger-latex'
              date='Jun 2017'
              desc={
                <p>
                  A Chrome extension built with JavaScript and MathJax
                  that allows LaTeX to be rendered in Facebook Messenger.
                  Developed the live preview, clicking to copy equations, and PNG
                  rendering. First place submission for MHacks Nano.
                </p>
              }
            />
            <ResumeSpan
              name='Study Space President'
              location='High School'
              link='http://studyspacewchs.com'
              text='studyspacewchs.com'
              date='Nov 2016 - May 2017'
              desc={
                <p>
                  Developed a website using HTML, CSS and JavaScript for my
                  high school’s tutoring club to host study packets for courses
                  in the maths and sciences. Organized and led weekly executive
                  meetings and tutoring sessions for over 100 students.
                </p>
              }
            />
          </div>
        </div>

        <div className='resume-right'>
          <div className='section contact'>
            <h3>Contact</h3>
            <ResumeContact
              link='https://github.com/cloudedwindow'
              alt='GitHub'
              icon='icon ion-social-octocat'
              text='github.com/cloudedwindow'
            />
            <ResumeContact
              link='https://linkedin.com/in/edwin-zhang'
              alt='LinkedIn'
              icon='icon ion-social-linkedin-outline'
              text='linkedin.com/in/edwin-zhang'
            />
            <ResumeContact
              link='https://devpost.com/edwinzhang'
              alt='Devpost'
              icon='icon ion-code'
              text='devpost.com/edwinzhang'
            />
            <ResumeContact
              link='mailto:edwin.zhang@uwaterloo.ca'
              alt='Email'
              icon='icon ion-android-mail'
              text='edwin.zhang@uwaterloo.ca'
            />
          </div>

          <div className='section skills'>
            <h3>Skills</h3>
            <div className='t1'>Proficient</div>
            <p> C++{slash}Java{slash}Python<br/>
                HTML{slash}CSS{slash}
                Javascript<br/>
                React{slash}Node{slash}Meteor
            </p>
            <div className='t1'>Academically Exposed</div>
            <p>
              MATLAB{slash}Octave
            </p>
            <div className='t1'>Prior Experience</div>
            <p>
              Go{slash}Solidity<br/>
              Unreal Engine 4{slash}Blender 3D
            </p>
          </div>

          <div className='section coursework'>
            <h3>Relevant Coursework</h3>
            <p>
              Algorithms I & II by <i>Princeton</i> <br/>
              Machine Learning by <i>Stanford</i> <br/>
              Complete Unreal Engine 4 Development Course by <i>Ben Tristem</i>
            </p>
          </div>

          <div className='section interests'>
            <h3>Interests</h3>
              <p>
                Underwater Hockey{slash}Music<br/>
                Cryptocurrency{slash}Video Games<br/>
                Machine Learning{slash}Hackathons
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage
