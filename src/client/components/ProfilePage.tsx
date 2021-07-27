import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { getSingleUser, UserType } from './callFunctions/singleUser'
import { getPosts, PostType } from './callFunctions/posts'
// import ImageGallery from './ImageGallery'
import CreatePost from './CreatePost'
import MainNav from './MainNav'

interface ProfileProps {
  user: UserType
  setUser: (user: Object) => void
}

const ProfilePage: React.FunctionComponent<ProfileProps> = (props) => {
  const [posts, setPosts] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  let render:any = ''

  async function grabUser(id:string){
    const loggedInUser = await getSingleUser(id)
    props.setUser(loggedInUser)
  }

  async function grabPosts(id:string){
    const gotPosts: any = await getPosts(id)
    if(!posts){
    setPosts(gotPosts)
    console.log('gotposts: ', posts)
    }
  }

useEffect(() =>{
  if(!props.user.username){
    grabUser(window.localStorage.id)
    grabPosts(window.localStorage.id)
    setLoading(false)
  }
}) 

return(
  <div>
  <MainNav user={props.user} setUser={props.setUser}/>
  {!posts ? (<h1> hi </h1>) :(
    <div>
 {posts.map((post: PostType) =>(
   <div key={post.id}>
   <img src={post.imageUrl}/>
   <p>{post.text}</p>
   </div>
 ))}
 </div>)}
  </div>
)
}
export default ProfilePage;
