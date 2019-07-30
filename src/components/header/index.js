import React from "react";

export const Navigation = props => {
  const { content, styled } = props;
  return (
    <main className={`navigation ${styled}`}>
      <div className="container">
        <nav className="nav-tabs ">
          <ul>
            {content.map(tab => (
              <li>{tab}</li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
};
