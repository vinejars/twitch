import React, { useState } from 'react'
import firebase from '../../config/firebase'
import { createPost } from './callFunctions/posts'
import { UserType } from './callFunctions/singleUser'
import MainNav from './MainNav'
import { useHistory } from 'react-router-dom'


interface CreateProps {
  user: UserType
  setUser: (user: Object) => void
}

const CreatePost: React.FunctionComponent<CreateProps> = (props) => {
 const [text, setText] = useState<string>('')
 const [photoUrl, setPhotoUrl] = useState<string>('')
 const [userId, setUserId] = useState<string>('')
 const history = useHistory()
// console.log('createpost user: ', props.user)
const handleClick = (e: any) =>{
  e.preventDefault()
  createPost(userId, photoUrl, text)
  history.push(`/user/${userId}`)
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
    console.log('fileRef: ', fileRef)
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