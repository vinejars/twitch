import React from "react";
import { Link } from "react-router-dom";

const LoginNav: React.FunctionComponent = (props) => {
  return (
    <div>
      <nav id="navcontain">
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
      </nav>
    </div>
  );
};

export default LoginNav;
