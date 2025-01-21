import styled from "styled-components";
import VideoCard from "./VideoCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  margin: 1.5rem;
  background: #f8f9fa;
`;

function VideoList({ videos }) {
  return (
    <CardContainer>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          image={video.imageLink}
          description={video.description}
        />
      ))}
    </CardContainer>
  );
}

export default VideoList;
