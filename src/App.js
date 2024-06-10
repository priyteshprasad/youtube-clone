import "./App.css";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import { useState } from "react";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
function App() {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    await changeComments(response.data.items[0]);
  };
  const changeComments = async (video) => {
    const response = await youtube.get("/commentThreads", {
      params: {
        videoId: video.id.videoId,
      },
    });
    console.log("Comments", response.data);
    setComments(response.data);
  };
  const onVideoSelect = async (video) => {
    setSelectedVideo(video);
    await changeComments(video);
  };
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} comments={comments.items} />
          </div>
          <div className="five wide colums">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
