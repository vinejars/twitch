import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { getSingleUser, UserType, getInfo } from './callFunctions/singleUser'
import { getPosts, PostType } from './callFunctions/posts'
import CreatePost from './CreatePost'
import MainNav from './MainNav'

interface ProfileProps {
  user: UserType
  setUser: (user: Object) => void
}

const ProfilePage: React.FunctionComponent<ProfileProps> = (props) => {
  const [posts, setPosts] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [info, setInfo] = useState<any>(null)

  async function grabUser(id:string){
    const loggedInUser = await getSingleUser(id)
    props.setUser(loggedInUser)
  }
   async function grabInfo(id:string){
    const profileInfo = await getInfo(id)
    setInfo(profileInfo)
  }

  async function grabPosts(id:string){
    const gotPosts: any = await getPosts(id) 
    setPosts(gotPosts)
    //console.log('gotposts: ', posts)
  }


useEffect(() =>{
  if(!props.user.username){
    grabUser(window.localStorage.id)
    setLoading(false)
  } if(!posts){
grabPosts(window.localStorage.id)
}
if(!info){
  grabInfo(window.localStorage.id)
}
  })



return(
  <div>
  <MainNav user={props.user} setUser={props.setUser}/>
 
  {!info ? (null) : (
    <div id='aboutme' key={info.id}>
    <h3>About Me: </h3>
    <p> {info.aboutMe} </p>
    <h3> My Ring </h3>
    <p> {info.ring} </p>
    <h3> {info.destination} </h3>
    <p> {info.destination} </p>
    </div>
  )}
  {!posts ? (null) :(
    <div>
 {posts.map((post: PostType) =>(
   <div key={post.id}>
   <img src={post.imageUrl} width={300}/>
   <p>{post.text}</p>
   </div>
 ))}
 </div>)}
  </div>
)
}
export default ProfilePage;
