import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
	render() {
		return (
			<div className='main home'>
				<div className ='name'>
          <h1>Edwin Zhang</h1>
        </div>
				<h2>Hello world!</h2>
				<p className='about-text'>
					I'm currently a first year <span className='blue'>software engineering
					student</span> at the University of Waterloo. I'm interested in
					<span className='green'> full-stack web development</span> and
					<span className='green'> machine learning</span>. When I'm not programming,
					you can find me playing underwater hockey or the trombone.
				</p>
				<div className='nav'>
					<a href='/Resume.pdf' target='_blank'><button className='button-purple'>Résumé</button></a>
					<Link to='/projects'><button className='button-blue'>Projects</button></Link>
				</div>
			</div>
		);
	}
}

export default IndexPage
