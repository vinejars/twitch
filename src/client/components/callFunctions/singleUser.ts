import {User} from '../../../server/db/index'
import axios from 'axios'
import { useHistory } from 'react-router-dom'



//function to retrieve a single user from database
export const getSingleUser = async function(id: string){
    try {
        const {data} = await axios.get(`/api/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }  
}

//function to create a user in the database
export async function createUser(username: string, email: string, firebase: string){
  try {
      await axios.post('/api/create', { username, email, firebase })
  } catch (error) {
      console.log(error)
  }
  }


//function to create About Section in profile
export async function createAbout(id: string,about: string, ring: string, destination: string){
    console.log('am i getting here?')
  try {
     const info = await axios.post('/api/createabout', { id,about, ring, destination})
     console.log('info: ', info)
     return info
  } catch (error) {
      console.log(error)
      return null
  }
}

