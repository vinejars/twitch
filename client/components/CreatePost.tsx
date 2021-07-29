import React, { useState } from "react";
import firebase from "../config/firebase";
import { createPost } from "./callFunctions/posts";
import { UserType } from "./callFunctions/singleUser";
import MainNav from "./MainNav";
import { useHistory } from "react-router-dom";
import { TextField, Button, Input } from "@material-ui/core";

interface CreateProps {
  user: UserType;
  setUser: (user: Object) => void;
}

const CreatePost: React.FunctionComponent<CreateProps> = (props) => {
  const [text, setText] = useState<string | null>("");
  const [photoUrl, setPhotoUrl] = useState<string | null>("");
  const [userId, setUserId] = useState<string>("");
  const history = useHistory();

  const handleClick = async (e: any) => {
    e.preventDefault();
    createPost(userId, photoUrl, text);
    history.push(`/gallery`);
  };

  const onChange = async (e: any) => {
    if (!e.target.files) {
      //handle error
      throw new Error("no file chosen!");
      return;
    }
    const file: File = e.target.files[0];
    const storageRef = await firebase.storage().ref();
    const fileRef = await storageRef.child(file.name);
    await fileRef.put(file).then(() => {
      console.log("SUCCESS!!!");
    });

    if (!window.localStorage.id) {
      throw new Error(
        "how did you get here?! please log in to upload a post :)"
      );
    }
    let id: string = window.localStorage.id;
    let url: string | null = await fileRef.getDownloadURL();
    console.log("id: ", id, "url: ", url);
    setPhotoUrl(url);
    setUserId(id);
  };

  return (
    <div>
      <MainNav user={props.user} setUser={props.setUser} />
    <div id='add-contain'>
  <div id='add-flex'>
  <h3> Choose A Post! </h3>
      <Input type="file" onChange={(e) => onChange(e)} />
      <br/><br/>

      <h3>Tell Us Your Story!</h3>

      <TextField
      variant='filled'
        multiline={true}
        id="standard-basic"
        label="What's happening?"
        onChange={(event) => setText(event.target.value)}
      />
      <br/>
      <br/>



     <Button
							variant='contained'
							className='edit-button'
							style={{
								margin: '0 auto',
								display: 'flex',
								backgroundColor: 'black',
								color: '#f6fff2',
							}}
						 onClick={(e) => handleClick(e)}>Voila!</Button>
             </div>
    </div>
    </div>
  );
};

export default CreatePost;
