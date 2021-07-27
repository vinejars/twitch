import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../config/firebase';

interface NavProps {
	user: {
		id: string;
		username: string;
		firebaseID: string;
		email: string;
	};
	setUser: (user: Object) => void;
}

const MainNav: React.FunctionComponent<NavProps> = (props) => {
	const history = useHistory();
	const logout = () => {
		firebase
			.auth()
			.signOut()
			.catch((error) => {
				console.log(error);
			});
		props.setUser(null);
		history.push('/login');
	};

	return (
		<div>
			<nav id='navcontain'>
				<Link to='/allPhotos'> Feed </Link>
				<Link to='/add'> Add Post </Link>
				<Link to='/gallery'> My Journey </Link>
				<button onClick={logout}> Logout </button>
			</nav>
		</div>
	);
};

export default MainNav;
