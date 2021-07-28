import React, { useState, useEffect } from 'react';
import { UserType, getInfo, editAbout } from './callFunctions/singleUser';
import { PostType, AboutType } from './callFunctions/posts';
import MainNav from './MainNav';
import { useHistory } from 'react-router-dom';

interface EditProps {
	user: UserType;
	setUser: (user: UserType) => void;
}

const EditAbout: React.FunctionComponent<EditProps> = (props) => {
	const [about, setAbout] = useState<string>('');
	const [ring, setRing] = useState<string>('');
	const [destination, setDestination] = useState<string>('');
	const [info, setInfo] = useState<any>(null);
	const history = useHistory();

	async function grabInfo() {
		if (props.user.id) {
			const oldInfo: string | null = await getInfo(props.user.id);
			await setInfo(oldInfo);
		} else {
			return;
		}
	}

	useEffect(() => {
		if (!info && props.user) {
			grabInfo();
		}
	});

	async function handleSubmit() {
		if (props.user.id) {
			let obj: AboutType = {
				id: props.user.id,
				aboutMe: about,
				ring: ring,
				destination: destination,
				userId: props.user.id,
			};
			editAbout(obj);
			history.push(`/gallery`);
		} else {
			return;
		}
	}

	return (
		<div>
			<MainNav user={props.user} setUser={props.setUser} />
			{info ? (
				<div>
					<form onSubmit={handleSubmit}>
						<label htmlFor='aboutme'>About Me: </label>
						<input
							type='text'
							name='aboutme'
							id='aboutme'
							defaultValue={info.aboutMe}
							onChange={(event) => setAbout(event.target.value)}
						/>

						<label htmlFor='ring'>
							My Ring, aka what I'm bringing with me on this journey:{' '}
						</label>
						<input
							type='text'
							name='ring'
							defaultValue={info.ring}
							onChange={(event) => setRing(event.target.value)}
						/>

						<label htmlFor='destination'>My Destination: </label>
						<input
							type='text'
							name='destination'
							id='destination'
							defaultValue={info.destination}
							onChange={(event) => setDestination(event.target.value)}
						/>
						<button type='submit'> Submit </button>
					</form>
				</div>
			) : null}
		</div>
	);
};

export default EditAbout;
