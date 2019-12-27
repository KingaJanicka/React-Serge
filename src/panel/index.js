import React from "react";

const Panel = ({ className, footer, children }) => {
  return (
    <section className={`${className}__panel`}>
      <div className={`${className}__modules`}>{children}</div>

      {footer && <div className={`${className}__footer`}>{footer}</div>}
    </section>
  );
};

Panel.defaultProps = {
  className: "serge"
};

export default Panel;
