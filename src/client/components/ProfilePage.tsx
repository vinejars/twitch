import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getSingleUser} from './callFunctions/singleUser'

interface PageProps {
  user: {
      email: string,
      id: string,
      firebaseID: string,
      username: string
  }
}

export default const ProfilePage: React.FunctionComponent<PageProps> = (props) => {

     const {id} = useParams()
     const [user, setUser] = useState({})
     console.log(id)
    
    useEffect(() => {
    const currUser = getSingleUser(id)
    setUser(currUser)
  })

    return (
        <div>
          <h1>meh</h1>  
        </div>
    )
}



