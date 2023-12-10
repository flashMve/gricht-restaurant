import React, { useRef, useState } from "react";

import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    if (playVideo) {
      vidRef.current.pause();
      setPlayVideo(false);
    } else {
      vidRef.current.play();
      setPlayVideo(true);
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        controls={false}
        type="video/mp4"
        loop={true}
        muted={true}
        ref={vidRef}
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill fontSize={30} color="#fff" />
          ) : (
            <BsFillPlayFill fontSize={30} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
