import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { getSingleUser } from './callFunctions/singleUser'
import { getPosts } from './callFunctions/posts'
import CreatePost from './CreatePost'
import MainNav from './MainNav'

interface ProfileProps {
  user: {
    id: string,
    username: string,
    firebaseID: string,
    email: string
  }
  setUser: (user: Object) => void
}

const ProfilePage: React.FunctionComponent<ProfileProps> = (props) => {
  const [posts, setPosts] = useState([])

  async function grabUser(id:string){
    const loggedInUser = await getSingleUser(id)
    props.setUser(loggedInUser)
  }

  async function grabPosts(id:string){
    console.log('1. im here')
    const posts = await getPosts(id)
    setPosts(posts)
  }

useEffect(() =>{
  if(!props.user.username){
    grabUser(window.localStorage.id)
    
  }
}) 

useEffect( async ()=>{
    grabPosts(window.localStorage.id)
}, [])


  return(
 <div>
 <MainNav user={props.user} setUser={props.setUser} />
 <h1> Can We See This?</h1>
  </div>
)
}

export default ProfilePage;
