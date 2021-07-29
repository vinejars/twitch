import React from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab, Button } from "@material-ui/core";


const LoginNav: React.FunctionComponent = (props) => {
  const [value, setValue] = React.useState<number>(0);
  const history = useHistory()

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <nav id="navcontain">
        <Tabs
          TabIndicatorProps={{ style: { display: "none" } }}
          value={value}
          onChange={handleChange}
        >
          <Tab
            label="Login!"
            onClick={() => history.push(`/login`)}
            style={{ color: "white" }}
          />
          <Tab
            label="Sign Up!"
            onClick={() => history.push(`/signup`)}
            style={{ color: "white" }}
          />
        </Tabs>
      </nav>
    </div>
  );
};

export default LoginNav;
