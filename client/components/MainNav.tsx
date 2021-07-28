import React from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import { UserType } from "./callFunctions/singleUser";

interface NavProps {
  user: UserType;
  setUser: (user: Object) => void;
}

const MainNav: React.FunctionComponent<NavProps> = (props) => {
  // console.log('nav user: ', props.user)
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
    history.push("/login");
  };

  return (
    <div>
      <nav id="navcontain">
        <Link to="/gallery"> The Fellowship Feed </Link>
        <Link to="/add"> Add Post </Link>
        <Link to={`/user/${props.user.id}`}> My Journey </Link>
        <button onClick={logout}> Logout </button>
      </nav>
    </div>
  );
};

export default MainNav;
