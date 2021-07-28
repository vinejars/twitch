import React, { useState } from 'react';
import firebase from '../config/firebase';
import { createPost } from './callFunctions/posts';
import { UserType } from './callFunctions/singleUser';
import MainNav from './MainNav';
import { useHistory } from 'react-router-dom';

interface CreateProps {
	user: UserType;
	setUser: (user: Object) => void;
}

const CreatePost: React.FunctionComponent<CreateProps> = (props) => {
	const [text, setText] = useState<string | null>('');
	const [photoUrl, setPhotoUrl] = useState<string | null>('');
	const [userId, setUserId] = useState<string>('');
	const history = useHistory();

	const handleClick = async (e: any) => {
		e.preventDefault();
		createPost(userId, photoUrl, text);
		history.push(`/gallery`);
	};

	const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			//handle error
			throw new Error('no file chosen!');
			return;
		}
		const file: File = e.target.files[0];
		const storageRef = await firebase.storage().ref();
		const fileRef = await storageRef.child(file.name);
		await fileRef.put(file).then(() => {
			console.log('SUCCESS!!!');
		});

		if (!window.localStorage.id) {
			throw new Error(
				'how did you get here?! please log in to upload a post :)'
			);
		}
		let id: string = window.localStorage.id;
		let url: string | null = await fileRef.getDownloadURL();
		setPhotoUrl(url);
		setUserId(id);
	};

	return (
		<div>
			<MainNav user={props.user} setUser={props.setUser} />
			<input type='file' onChange={(e) => onChange(e)} />
			<textarea
				name='postinfo'
				maxLength={250}
				onChange={(event) => setText(event.target.value)}
			></textarea>
			<button onClick={(e) => handleClick(e)}> Upload </button>
		</div>
	);
};

export default CreatePost;
