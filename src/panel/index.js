import React from "react";
import "./styles.css";

const Panel = ({ className, footer, children }) => {
  return (
    <section className={`${className}__panel panel`}>
      <div className={`${className}__modules modules`}>{children}</div>

      {footer && (
        <div className={`${className}__footer footer label`}>{footer}</div>
      )}
    </section>
  );
};

Panel.defaultProps = {
  className: "serge"
};

export default Panel;
