import React from "react";

interface FailProps {
  error: string;
}

const Fail: React.FunctionComponent<FailProps> = (props) => {
  if (props.error === "") return null;
  return <p>{props.error}</p>;
};

export default Fail;
