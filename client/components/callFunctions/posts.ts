import axios from 'axios';

export type PostType = {
	id?: number;
	text?: string;
	imageUrl?: string;
	userId?: string;
};

export type AboutType = {
	id: string;
	aboutMe: string;
	ring: string;
	destination: string;
	userId: string;
};

//function to create a post
export async function createPost(
	userId: string,
	imageUrl: string | null,
	text: string | null
) {
	try {
		console.log(
			'axios userId: ',
			userId,
			'imageUrl: ',
			imageUrl,
			'text:',
			text
		);
		await axios.post('/api/post', { userId, imageUrl, text });
	} catch (error) {
		console.log(error);
	}
}

//function to delete a post

export async function deletePost(id: string) {
	try {
		await axios.delete(`/api/deletepost/${id}`);
	} catch (error) {
		console.log(error);
	}
}
//function to get a specific user's posts
export const getPosts = async function (userId: string) {
	try {
		let posts: Array<PostType> = [{}];
		await axios.get(`/api/allposts/${userId}`).then((response) => {
			posts = response.data;
		});
		return posts;
	} catch (error) {
		console.log(error);
		return null;
	}
};

//function to get all posts
export const getAllImages = async function () {
	try {
		let images: Array<PostType> = [{}];
		await axios.get('/api/gallery/').then((response) => {
			images = response.data;
		});
		return images;
		console.log('function Images: ', images);
	} catch (error) {
		console.log(error);
		return null;
	}
};
