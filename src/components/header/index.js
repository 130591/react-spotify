import React from "react";

export const Navigation = (props) => {
  const { content } = props;
  return (
    <main className="navigation">
      <div className="container">
        <nav className="nav-tabs">
          <ul>
            {
              content.map(tab => <li>{tab}</li>)
            }
          </ul>
        </nav>
      </div>
    </main>
  );
};
