import React, {useState} from 'react'
import axios from 'axios'
import { createAbout } from './callFunctions/posts'
import { UserType } from './callFunctions/singleUser'

interface CreateProps{
   user: UserType
}
const CreateAbout: React.FunctionComponent<CreateProps> = props => {
const [about, setAbout] = useState<string>('')
const [ring, setRing] = useState<string>('')
const [destination, setDestination] = useState<string>('')

function handleSubmit(e: any){
  e.preventDefault();
  createAbout(props.user.id, about, ring, destination)
}

  return(
 <div> 
  <form onSubmit={(e) => handleSubmit(e)}>
  <label htmlFor='aboutme'>About Me: </label>
  <input 
  type='text'
  name='aboutme'
  id='aboutme'
  value={about}
  onChange={(event)=> setAbout(event.target.value)}/>

  <label htmlFor='ring'>My Ring, aka what I'm bringing with me on this journey: </label>
  <input 
  type='text'
  name='ring'
  id='ring'
  value={ring}
  onChange={(event)=> setRing(event.target.value)}/>

   <label htmlFor='destination'>My Destination: </label>
  <input 
  type='text'
  name='destination'
  id='destination'
  value={destination}
  onChange={(event)=> setDestination(event.target.value)}/>

<button type='submit'> Submit!</button>
  </form>
  </div>
  )
}

export default CreateAbout






