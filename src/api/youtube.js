import axios from "axios";

const KEY = "AIzaSyCB4cyXerd-FQ7FdaWFLZVG484nL8T65j8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
