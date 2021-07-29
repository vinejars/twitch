import * as React from 'react';
import LoginNav from './LoginNav';

class Main extends React.Component {
	render() {
		return (
			<div>
				<LoginNav />
				<div id='main-heading'>
					<h1> Welcome to Speak Friend! </h1>
					<h2>
						<i>the social media site for LOTR nerds looking for adventure </i>
					</h2>
					<br />
					<h2> Login or sign up above to start sharing your journey. </h2>
					<h2>
						Whether you're a fearless dwarf or a timid hobbit, <br /> we want to
						see the adventures you're getting up to!{' '}
					</h2>
				</div>
			</div>
		);
	}
}

export default Main;
