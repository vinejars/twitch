import React from 'react';
import MainNav from './MainNav'
import { UserType } from './callFunctions/singleUser'

interface AllProps {
  user: UserType
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