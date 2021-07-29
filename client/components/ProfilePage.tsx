import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getSingleUser, UserType, getInfo } from './callFunctions/singleUser';
import { getPosts, PostType, deletePost } from './callFunctions/posts';
import MainNav from './MainNav';
import Quote from './Quote';
import {
	Button,
	Fab,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	IconButton,
} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
  <Quote/>
			<div className='profilecontainer'>
				{!info ? null : (
					<div>
						<div className='aboutme' key={info.id}>
							<div className='about-info'>
								<h3>About Me: </h3>
								
								<p> {info.aboutMe} </p>
							</div>
							<div className='about-info'>
								<h3> My Ring: </h3>
								
								<p> {info.ring} </p>
							</div>
							<div className='about-info'>
								<h3> My Destination: </h3>
								
								<p> {info.destination} </p>
							</div>
							<div>
								<Fab
									size='large'
									className='add'
									onClick={() => history.push('/add')}
								>
									<AddIcon />
								</Fab>
							</div>
						</div>

      
						<Button
							variant='contained'
							onClick={() => history.push('/edit')}
							className='edit-button'
							style={{
								margin: '0 auto',
								display: 'flex',
								backgroundColor: 'black',
								color: '#f6fff2',
							}}
						>
							Start A New Journey
						</Button>
  
            
					</div>
				)}
				{!posts ? null : (
					<div className='postlist'>
						<ImageList rowHeight={200} cols={3}>
							{posts.map((post: PostType) => (
								<ImageListItem key={post.id}>
									<div className='single-post'>
										<img
											src={post.imageUrl}
											width={300}
											alt={post.text}
											id='profile-img'
										/>
										<ImageListItemBar
											className='image-label'
											title={post.text}
											actionIcon={
												<IconButton
													aria-label={`delete post`}
													onClick={handleDelete}
												>
													<DeleteForeverIcon className='delete-button' />
												</IconButton>
											}
										/>
									</div>
								</ImageListItem>
							))}
						</ImageList>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfilePage;
