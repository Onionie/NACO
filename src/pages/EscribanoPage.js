import React from 'react';
import './EscribanoPage.css';

import ReactPlayer from 'react-player/youtube';

const EscribanoPage = () => {
  return (
    <section className="section_escribano">
      <div className="player-wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ne5OEKFoLm8"
          className="react-player"
          playing
          width="80%"
          height="80%"
          controls={true}
          volume={1}
          muted={true}
        />
      </div>
    </section>
  );
};

export default EscribanoPage;
