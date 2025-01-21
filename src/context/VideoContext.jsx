import React, { createContext, useState, useContext, useEffect } from "react";
import {
  saveVideosToLocalStorage,
  loadVideosFromLocalStorage,
} from "../utils/localStorage";

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedVideos = loadVideosFromLocalStorage();
    setVideos(storedVideos);
  }, []);

  const addVideo = (video) => {
    const updatedVideos = [...videos, video];
    setVideos(updatedVideos);
    saveVideosToLocalStorage(updatedVideos);
  };

  const removeVideo = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
    saveVideosToLocalStorage(updatedVideos);
  };

  const editVideo = (index, updatedVideo) => {
    const updatedVideos = videos.map((video, i) =>
      i === index ? { ...video, ...updatedVideo } : video
    );
    setVideos(updatedVideos);
    saveVideosToLocalStorage(updatedVideos);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, removeVideo, editVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
