import React, { useContext } from "react";
//import { engineContext } from "../rack";

const Module = ({ className, children, name }) => {
  //  const engine = useContext(engineContext);
  //  return children(engine);
  return (
    <div className={`${className}__module`}>
      <div className={`${className}__module--name`}>{name}</div>
      <div className={`${className}__module--components`}>{children}</div>
    </div>
  );
};
Module.defaultProps = { className: "serge", name: "Module" };

export default Module;
