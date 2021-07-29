import React, { useState, useEffect } from 'react';
import MainNav from './MainNav';
import { UserType } from './callFunctions/singleUser';
import { PostType, getAllImages } from './callFunctions/posts';
import { Fab, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'
interface AllProps {
	user: UserType;
	setUser: (user: Object) => void;
}

const AllPosts: React.FunctionComponent<AllProps> = (props) => {
	const [images, setImages] = useState<PostType[] | null>(null);
  const history = useHistory()

	async function grabPosts() {
		const allImages: PostType[] | null = await getAllImages();
		setImages(allImages);
	}

	useEffect(() => {
		if (!images) {
			grabPosts();
		}
	});

	return (
		<div>
			<MainNav user={props.user} setUser={props.setUser} />
			{!images ? null : (
				<div id='galleryoutside'>
					<ImageList rowHeight={180} cols={3}>
						{images.map((image: PostType) => (
							<ImageListItem key={image.id}>
								<img src={image.imageUrl} width={300} />
								<ImageListItemBar title={image.text} />
							</ImageListItem>
						))}
    
					</ImageList>
				</div>
			)}
      <div>
        <Fab size='large' className='add' onClick={() => history.push('/add')}>
				<AddIcon />
			</Fab>
      </div>
      
		</div>
	);
};

export default AllPosts;
