import React from 'react';

import moment from "moment";

export const ListTracks = ({ track, artist, audioControl, customStyle }) => {
  return (
    <li 
       key={track.id && track.id} 
       className={`tracks ${customStyle ? customStyle : ''}`} 
       onClick={() => audioControl(track)}
      >
      <div className="tracks__info">
        <h2>{track.name && track.name}</h2>
        <a>
          {track.artist && track.artists[0].name} <span>{artist && artist.items && artist.items[0].name}</span>
        </a>
      </div>
      <span className="tracks__time">
        {`${moment.duration(parseInt(track.duration_ms)).minutes()} : ${moment.duration(parseInt(track.duration_ms)).seconds()}`
        }
      </span>
    </li>
  )
}