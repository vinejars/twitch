import React from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import { UserType } from "./callFunctions/singleUser";
import { Tabs, Tab, Button } from "@material-ui/core";

interface NavProps {
  user: UserType;
  setUser: (user: Object) => void;
}

const MainNav: React.FunctionComponent<NavProps> = (props) => {
  const [value, setValue] = React.useState<number>(0);

  const history = useHistory();
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        console.log(error);
      });
    props.setUser({
      id: undefined,
      email: undefined,
      username: undefined,
      firebaseID: undefined,
    });
    localStorage.clear();
    history.push("/login");
  };

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      {props.user ? (
        <div>
          <nav id="navcontain">
            <Tabs
              TabIndicatorProps={{ style: { display: "none" } }}
              value={value}
              onChange={handleChange}
            >
              <Tab
                label="The Fellowship Feed"
                onClick={() => history.push(`/gallery`)}
                style={{ color: "white" }}
              />
              <Tab
                label="My Journey"
                onClick={() => history.push(`/user/${props.user.id}`)}
                style={{ color: "white" }}
              />
              <Tab label="Logout" onClick={logout} style={{ color: "white" }} />
            </Tabs>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default MainNav;
