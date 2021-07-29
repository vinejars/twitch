import React, { useState, useEffect } from "react";
import { UserType, getInfo, editAbout } from "./callFunctions/singleUser";
import { PostType, AboutType } from "./callFunctions/posts";
import MainNav from "./MainNav";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

interface EditProps {
  user: UserType;
  setUser: (user: UserType) => void;
}

const EditAbout: React.FunctionComponent<EditProps> = (props) => {
  const [about, setAbout] = useState<string>("");
  const [ring, setRing] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [info, setInfo] = useState<any>(null);
  const history = useHistory();

  async function grabInfo() {
    if (props.user.id) {
      const oldInfo: string | null = await getInfo(props.user.id);
      await setInfo(oldInfo);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (!info && props.user) {
      grabInfo();
    }
  });

  async function handleSubmit() {
    if (props.user.id) {
      let obj: AboutType = {
        id: props.user.id,
        aboutMe: about,
        ring: ring,
        destination: destination,
        userId: props.user.id,
      };
      editAbout(obj);
      history.push(`/gallery`);
    } else {
      return;
    }
  }

  return (
    <div id="edit-everything">
      <MainNav user={props.user} setUser={props.setUser} />
      {info ? (
        <div >
          <form onSubmit={handleSubmit}>
            <div id="edit-flex">
              <div className='editinfo'>
                <label htmlFor="aboutme">About Me: </label>
                <br />
                <TextField                
                className='text-field'
                variant='filled'
                multiline={true}
                  id="ring"
                  label="About Me"
                  type="text"
                  name="aboutme"
                  defaultValue={info.aboutMe}
                  onChange={(event: any) => setAbout(event.target.value)}
                />
              </div>

              <div className='editinfo'>
                <label htmlFor="ring">
                  My Ring, aka what I'm bringing with me on this journey:{" "}
                </label>
                <br />
                <TextField
                className='text-field'
                variant='filled'
                 multiline={true}
                  id="ring"
                  label="Ring"
                  type="text"
                  name="ring"
                  defaultValue={info.ring}
                  onChange={(event: any) => setRing(event.target.value)}
                />
              </div>

              <div className='editinfo'>
                <label htmlFor="destination">My Destination: </label>
                <br />
                <TextField
                className='text-field'
                variant='filled'
                 multiline={true}
                  id="destination"
                  label="My Destination"
                  type="text"
                  name="destination"
                  defaultValue={info.destination}
                  onChange={(event: any) => setDestination(event.target.value)}
                />
              </div>
            </div>

            <Button
              variant="contained"
              type="submit"
              style={{
                margin: "0 auto",
                display: "flex",
                backgroundColor: "black",
                color: "#f6fff2",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default EditAbout;
