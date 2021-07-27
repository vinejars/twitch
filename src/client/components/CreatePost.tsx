import React, { useState } from 'react'
import firebase from '../../config/firebase'
import { createPost } from './callFunctions/posts'
import MainNav from './MainNav'
import { useHistory } from 'react-router-dom'


interface CreateProps {
  user: {
    id: string,
    username: string,
    firebaseID: string,
    email: string
  }
  setUser: (user: Object) => void
}

const CreatePost: React.FunctionComponent<CreateProps> = (props) => {
  console.log(props)
 const [text, setText] = useState('')
 const [photoUrl, setPhotoUrl] = useState('')
 const [userId, setUserId] = useState('')
 const history = useHistory()

const handleClick = (e) =>{
  e.preventDefault()
  createPost(userId, photoUrl, text)
  history.push(`/user/${props.user.id}`)
}

  const onChange = async (e: any) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log("SUCCESSSSSSS!!")
    })

    let id: string = firebase.auth().currentUser.uid;
    let url: string = await fileRef.getDownloadURL()
    setPhotoUrl(url)
    setUserId(id)
  } 

return (
    <div>
    <MainNav user={props.user} setUser={props.setUser}/>
     <input type="file" onChange={onChange}/>
     <textarea name='postinfo' maxLength='250' onChange={(event)=> setText(event.target.value)}> 
     </textarea>
     <button onClick={(e: any)=> handleClick(e)}> Upload </button>
    </div>
)
}


export default CreatePost