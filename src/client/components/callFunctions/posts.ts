import axios from 'axios'

export type PostType = {
    id?: number;
    text?: string;
    imageUrl?: string;
    userId?: string
}


//function to create a post
export async function createPost(userId: string, imageUrl: string, text: string){
try {
      await axios.post('/api/post', { userId, imageUrl, text})
  } catch (error) {
      console.log(error)
  }
}

//function to get a specific user's posts
export const getPosts = async function(userId:string){
    try {
        let posts: Array<PostType> = [{}]
        await axios.get(`/api/allposts/${userId}`)
  .then((response) => { posts = response.data })
    return posts
    } catch (error) {
        console.log(error)
        return null;
    }
}
