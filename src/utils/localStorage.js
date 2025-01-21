export const saveVideosToLocalStorage = (videos) => {
  localStorage.setItem("videos", JSON.stringify(videos));
};

export const loadVideosFromLocalStorage = () => {
  const videos = localStorage.getItem("videos");
  return videos ? JSON.parse(videos) : [];
};
