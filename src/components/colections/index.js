import React from "react";

export const Collections = ({ children, title }) => {
  return (
    <section className="collections">
      <div className="container">
        <h2 className="collections__title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export const CollectionGrid = ({ children }) => {
  return <div className="collections-grid">{children}</div>;
};
