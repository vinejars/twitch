import React, { useState } from "react";
import firebase from "../../config/firebase";
import { createPost } from "./callFunctions/posts";
import { UserType } from "./callFunctions/singleUser";
import MainNav from "./MainNav";
import { useHistory } from "react-router-dom";

interface CreateProps {
  user: UserType;
  setUser: (user: Object) => void;
}

const CreatePost: React.FunctionComponent<CreateProps> = (props) => {
  const [text, setText] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const history = useHistory();

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("userId: ", userId);
    createPost(userId, photoUrl, text);
    history.push(`/gallery`);
  };

  const onChange = async (e: any) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file).then(() => {
      console.log("SUCCESSSSSSS!!");
    });
    let id: string = firebase.auth().currentUser.uid;
    console.log("id: ", id);
    let url: string = await fileRef.getDownloadURL();
    setPhotoUrl(url);
    setUserId(id);
  };

  return (
    <div>
      <MainNav user={props.user} setUser={props.setUser} />
      <input type="file" onChange={onChange} />
      <textarea
        name="postinfo"
        maxLength="250"
        onChange={(event) => setText(event.target.value)}
      ></textarea>
      <button onClick={(e: any) => handleClick(e)}> Upload </button>
    </div>
  );
};

export default CreatePost;
