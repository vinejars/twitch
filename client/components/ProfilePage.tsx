import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getSingleUser, UserType, getInfo } from './callFunctions/singleUser';
import { getPosts, PostType, deletePost } from './callFunctions/posts';
import MainNav from './MainNav';
import { Button, Fab } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';

interface ProfileProps {
	user: UserType;
	setUser: (user: Object) => void;
}

const ProfilePage: React.FunctionComponent<ProfileProps> = (props) => {
	const [posts, setPosts] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [info, setInfo] = useState<any>(null);
	const history = useHistory();

	async function grabUser(id: string) {
		const loggedInUser = await getSingleUser(id);
		props.setUser(loggedInUser);
	}
	async function grabInfo(id: string) {
		const profileInfo = await getInfo(id);
		setInfo(profileInfo);
	}
	async function grabPosts(id: string) {
		const gotPosts: any = await getPosts(id);
		setPosts(gotPosts);
	}

	useEffect(() => {
		if (!props.user.username) {
			grabUser(window.localStorage.id);
			setLoading(false);
		}
		if (!posts) {
			grabPosts(window.localStorage.id);
		}
		if (!info) {
			grabInfo(window.localStorage.id);
		}
	});

	function handleDelete() {
		if (props.user.id) {
			deletePost(props.user.id);
			grabPosts(props.user.id);
			history.go(0);
		} else {
			return;
		}
	}

	return (
		<div>
			<MainNav user={props.user} setUser={props.setUser} />

			{!info ? null : (
				<div id='aboutme' key={info.id}>
					<h3>About Me: </h3>
					<p> {info.aboutMe} </p>
					<h3> My Ring </h3>
					<p> {info.ring} </p>
					<h3> My Destination: </h3>
					<p> {info.destination} </p>
					<Link to='/edit'> Start A New Journey </Link>
				</div>
			)}
			{!posts ? null : (
				<div>
					{posts.map((post: PostType) => (
						<div key={post.id}>
							<img src={post.imageUrl} width={300} />
							<p>{post.text}</p>
							<Button variant='contained' onClick={handleDelete}> Delete </Button>
						</div>
					))}
				</div>
			)}
			<Fab size='large' className='add' onClick={() => history.push('/add')}>
				<AddIcon />
			</Fab>
		</div>
	);
};
export default ProfilePage;
