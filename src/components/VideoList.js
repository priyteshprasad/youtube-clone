import React from "react";
import VideoItem from "./VIdeoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  console.log("videos", videos);
  let renderedList = [];
  if (videos.length > 0) {
    renderedList = videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      );
    });
  }

  return (
    <div className="ui relaxed divided list">
      <h2>Top 10 Search Results</h2>
      {renderedList}
    </div>
  );
};

export default VideoList;
