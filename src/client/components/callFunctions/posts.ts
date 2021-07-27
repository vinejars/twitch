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
