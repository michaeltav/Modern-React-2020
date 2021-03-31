import axios from "axios";

const KEY = "AIzaSyBBsIQHfGwYJ1QmE-M_XyD9fzEJgqUrGnM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
