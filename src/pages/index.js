import React from 'react'

class IndexPage extends React.Component {
	render() {
		return (
			<div className='home'>
				<h2>Hello world!</h2>
				<p className='about-text'>
					I'm currently a <b>first year software engineering student at the
					University of Waterloo</b>. I have experience with web development
					using React and Meteor. When I'm not programming, you can find me playing
					underwater hockey or the trombone.
				</p>
			</div>
		);
	}
}

export default IndexPage
