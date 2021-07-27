import axios from 'axios'

let counter:number = 1;

export async function createPost(userId: string, imageUrl: string, text: string){
try {
      counter = 900
      await axios.post('/api/post', { userId, imageUrl, text, counter})
  } catch (error) {
      console.log(error)
  }
}

export async function getPosts(userId:string){
    try {
      console.log('2. im here')
        const { posts } = await axios.get('/api/allposts',{
      headers: {
        id: userId
      }
    })
    return posts
    } catch (error) {
        console.log(error)
    }
}
