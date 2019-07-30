import React from "react";

export const SearchOverview = ({ overdata }) => {
  const { items } = overdata.albums;
  return (
    <div className="searchOverview">
      <div className="searchOverview-media__body">
        <div className="media-object">
          <img src={!!items[0] ? items[0].images[0].url : ""} alt="" />
        </div>
        <h2 className="searchOverview__title">
          {!!items[0] ? items[0].name : ""}
        </h2>
        <p className="searchOverview__title searchOverview--subtitle">
          {!!items[0] ? items[0].artists[0].name : ""}
        </p>
      </div>
      <div className="trackContainer">
        <ol className="trackContent">
          <li className="tracks">
            <div className="tracks__info">
              <h2>Humanos</h2>
              <a href="#">
                artista <span>música</span>
              </a>
            </div>
            <span className="tracks__time">4:07</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
