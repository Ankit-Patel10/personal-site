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
            <h3>Experience</h3>
            <ResumeSpan
              name='Waterloop'
              location='Calgary, Canada'
              text='Back-end Software Team'
              date='Sept 2017 - Present'
              desc={
                <div>
                  <li>Built software backend using Go for hyperloop pod
                  competition team</li>
                </div>
              }
            />
          </div>

          <div className='section projects'>
            <h3>Projects</h3>
            {/*}<ResumeSpan
              name='React Ticket to Ride'
              location='Personal'
              link='https://github.com/cloudedwindow/react-ticket-to-ride'
              text='github.com/cloudedwindow/react-ticket-to-ride'
              date='Sept 2017'
              desc={
                <li>A digital version of the popular board game written in
                React and Meteor</li>
              }
            />*/}
            <ResumeSpan
              name='Rate My Hack'
              location='MHacks X'
              link='https://devpost.com/software/rate-my-hack'
              text='devpost.com/software/rate-my-hack'
              date='Sept 2017'
              desc={
                <div>
                  <li>Web app that provides feedback for hackathon ideas based
                  on ML algorithm trained on past Devpost submissions</li>
                  <li>Created front-end using React and developed Python
                  backend to analyze and scrape data</li>
                </div>
              }
            />
            <ResumeSpan
              name='Aya'
              location='Finalist and AWS Award - Hack the North'
              link='https://devpost.com/software/aya'
              text='devpost.com/software/aya'
              date='Sept 2017'
              desc={
              <div>
                <li>A robotic head powered by a Raspberry Pi using AWS for image
                recognition and text-to-speech output</li>
                <li>Built Python backend and worked on implementing k-means
                clustering for determining image label relevancy</li>
              </div>
              }
            />
            <ResumeSpan
              name='Messenger LaTeX'
              location='First Place - MHacks Nano'
              link='https://devpost.com/software/messenger-latex'
              text='devpost.com/software/messenger-latex'
              date='Jun 2017'
              desc={
                <div>
                  <li>Chrome extension built with JavaScript and MathJax to
                  render LaTeX in Facebook Messenger</li>
                  <li>Developed a live preview, clicking to copy equations, and
                  PNG rendering</li>
                </div>
              }
            />
            <ResumeSpan
              name='Study Space President'
              location='High School'
              link='http://studyspacewchs.com'
              text='studyspacewchs.com'
              date='Nov 2016 - May 2017'
              desc={
                <div>
                  <li>Created website using HTML, CSS, JavaScript for high school
                  tutoring club to host study packets in maths and sciences</li>
                  <li>Organized and led weekly executive meetings and tutoring
                  sessions for over 100 students</li>
                </div>
              }
            />
          </div>

          <div className='section education'>
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
            <p> C++{slash}Java{slash}Python{slash}Go<br/>
                HTML{slash}CSS{slash}
                Javascript<br/>
                React{slash}Node{slash}Meteor
            </p>
            <div className='t1'>Prior Experience</div>
            <p>
              Unreal Engine 4{slash}Blender 3D
            </p>
            <div className='t1'>Academically Exposed</div>
            <p>
              MATLAB{slash}Octave
            </p>
          </div>

          <div className='section coursework'>
            <h3>Relevant Coursework</h3>
            <p>
              Algorithms by <i>Princeton</i> <br/>
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
