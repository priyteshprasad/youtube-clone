import React from "react";
import "./styles/video-item.scss";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <img
        className="thumbnail"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
