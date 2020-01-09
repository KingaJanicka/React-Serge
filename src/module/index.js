import React, { useContext } from "react";
//import { engineContext } from "../rack";
import "./styles.css";

const Module = ({ className, children, name }) => {
  //  const engine = useContext(engineContext);
  //  return children(engine);
  return (
    <div className={`${className}__module module`}>
      <div className={`${className}__module--name label`}>{name}</div>
      <div className={`${className}__module--components`}>{children}</div>
    </div>
  );
};
Module.defaultProps = { className: "serge", name: "Module" };

export default Module;
