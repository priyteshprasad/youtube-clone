import React, { useState } from "react";
import "./styles/video-details.scss";
import { Button } from "antd";
import youtube from "../api/youtube";

const VideoDetail = ({ video, comments }) => {
  console.log("myVideo", video);
  const [showComments, setShowComments] = useState(false);
  if (video === null) {
    return <div>Loading...</div>;
  }

  const toggleCommentVisibility = () => {
    setShowComments((prev) => !prev);
  };

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video_player_details">
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="video_descriptions">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <b>{video.snippet.channelTitle}</b>
      </div>
      <div className="comments">
        <Button onClick={toggleCommentVisibility} type="link" size="small">
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
        {showComments ? (
          <div>
            {comments.map((comment) => {
              return (
                <p key={comment.id}>
                  <b>
                    {
                      comment.snippet?.topLevelComment?.snippet
                        ?.authorDisplayName
                    }
                    :
                  </b>
                  {comment.snippet?.topLevelComment?.snippet?.textOriginal}
                </p>
              );
            })}
          </div>
        ) : (
          <span>
            <p>
              <b>
                {
                  comments[0].snippet?.topLevelComment?.snippet
                    ?.authorDisplayName
                }{" "}
                :{" "}
              </b>
              {comments[0].snippet?.topLevelComment?.snippet?.textOriginal}
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
