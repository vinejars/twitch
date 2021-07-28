import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import { getSingleUser, UserType } from './callFunctions/singleUser'
import { getPosts, PostType } from './callFunctions/posts'
import CreateAbout from './CreateAbout'
import CreatePost from './CreatePost'
import MainNav from './MainNav'

interface ProfileProps {
  user: UserType
  setUser: (user: Object) => void
}

const ProfilePage: React.FunctionComponent<ProfileProps> = (props) => {
  const [posts, setPosts] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  async function grabUser(id:string){
    const loggedInUser = await getSingleUser(id)
    props.setUser(loggedInUser)
  }

  async function grabPosts(id:string){
    const gotPosts: any = await getPosts(id)
    if(!posts){
    setPosts(gotPosts)
    //console.log('gotposts: ', posts)
    }
  }

useEffect(() =>{
  if(!props.user.username | !posts){
    grabUser(window.localStorage.id)
    setLoading(false)
  }
}) 

useEffect(()=>{
  if(!posts){
grabPosts(window.localStorage.id)
}
})

return(
  <div>
  <MainNav user={props.user} setUser={props.setUser}/>
  <CreateAbout user={props.user}/>
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
