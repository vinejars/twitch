import React from 'react';
import MainNav from './MainNav'

interface AllProps {
  user: {
    id: string,
    username: string,
    firebaseID: string,
    email: string
  }
  setUser: (user: Object) => void
}
const AllPosts: React.FunctionComponent<AllProps> = (props) => {
 return(
     <div> 
    <MainNav user={props.user} setUser={props.setUser}/>
    </div>
 )
}

export default AllPosts;