import React, { useState, useRef, useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import MainNav from "./MainNav";
import Signup from "./Signup";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";
import EditAbout from "./EditAbout";
import { UserType } from "./callFunctions/singleUser";
import "../styles.css";

const Routes: React.FunctionComponent = (props) => {
  const [user, setUser] = useState<UserType>({});

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>

        <Route exact path="/signup">
          <Signup user={user} setUser={setUser} />
        </Route>

        <Route exact path="/user/:id">
          <ProfilePage user={user} setUser={setUser} />
        </Route>

        <Route exact path="/edit">
          <EditAbout user={user} setUser={setUser} />
        </Route>

        <Route exact path="/add">
          <CreatePost user={user} setUser={setUser} />
        </Route>

        <Route exact path="/gallery">
          <AllPosts user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
