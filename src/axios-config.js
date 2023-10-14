// axios-config.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://nameburg-server-8pcm.vercel.app/api/v1",
});

export default instance;
