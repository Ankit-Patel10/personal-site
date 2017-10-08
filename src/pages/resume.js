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
              location='Waterloo, ON'
              text='Back End Software Team'
              date='Sept 2017 - Present'
              desc={
                <div>
                  <p>&#183; Built software backend for hyperloop pod
                  competition team</p>
                </div>
              }
            />
          </div>

          <div className='section projects'>
            <h3>Projects</h3>
            <ResumeSpan
              name='React Ticket to Ride'
              location='Personal'
              link='https://github.com/cloudedwindow/react-ticket-to-ride'
              text='github.com/cloudedwindow/react-ticket-to-ride'
              date='Sept 2017'
              desc={
                <p>&#183; A digital version of the popular board game written in
                React and Meteor</p>
              }
            />
            <ResumeSpan
              name='Rate My Hack'
              location='MHacks X'
              link='https://devpost.com/software/rate-my-hack'
              text='devpost.com/software/rate-my-hack'
              date='Sept 2017'
              desc={
                <div>
                  <p>&#183; Web app that provides feedback for hackathon ideas based
                  on ML algorithm trained on past Devpost submissions</p>
                  <p>&#183; Created front-end using React and developed Python
                  backend to analyze and scrape data</p>
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
                <p>&#183; A robotic head powered by a Raspberry Pi using AWS for image
                recognition and text-to-speech output</p>
                <p>&#183; Built Python backend and worked on implementing k-means
                clustering for determining image label relevancy</p>
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
                  <p>&#183; Chrome extension built with JavaScript and MathJax to
                  render LaTeX in Facebook Messenger</p>
                  <p>&#183; Developed a live preview, clicking to copy equations, and
                  PNG rendering</p>
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
                  <p>&#183; Created website using HTML, CSS, JavaScript for high school
                  tutoring club to host study packets in maths and sciences</p>
                  <p>&#183; Organized and led weekly executive meetings and tutoring
                  sessions for over 100 students</p>
                </div>
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
            <div className='t1'>Knowledgeable</div>
            <p> C++{slash}C{slash}Java{slash}Python<br/>
                HTML{slash}CSS{slash}JavaScript<br/>
                React{slash}Node{slash}Go
            </p>
            <div className='t1'>Prior Experience</div>
            <p>
              Unreal Engine 4{slash}Blender 3D<br/>
              MATLAB{slash}Octave
            </p>
          </div>

          <div className='section coursework'>
            <h3>Relevant Coursework</h3>
            <p>
              Algorithms by <i>Princeton</i> <br/>
              Machine Learning by <i>Stanford</i> <br/>
              Complete Unreal Engine 4 Dev Course by <i>Ben Tristem on Udemy</i>
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

          <div className='section education'>
            <h3>Education</h3>
              <div className='t1'>University of Waterloo</div>
              <div className='t2'>Bachelor of Software Engineering</div>
              <p>2017 - 2022{slash}Waterloo, Canada</p>
            {/*
              <div className='t1'>Western Canada High School</div>
              <div className='t2'>International Baccalaureate Diploma</div>
              <p>2014 - 2017{slash}Calgary, AB</p>
              <p>&#183; 96% Cumulative Average</p>
              <p>&#183; Grade 12 Male Citizen of the Year</p>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage
