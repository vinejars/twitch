import * as React from "react";
import LoginNav from "./LoginNav";

class Main extends React.Component {
  render() {
    return (
      <div>
        <LoginNav />
        <div id="main-heading">
          <h1> Welcome to Speak Friend! </h1>
          <h2>the social media site for LOTR nerds looking for adventure </h2>
        </div>
      </div>
    );
  }
}

export default Main;
