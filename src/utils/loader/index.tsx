import * as React from "react";

interface ILoader {
  size: string | undefined
}

const Loader: React.FC<ILoader> = (props) => {

  const { size } = props;

  return <div className={`loader-${size}`}/>;
};

export default Loader;
