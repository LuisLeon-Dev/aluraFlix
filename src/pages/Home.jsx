import styled from "styled-components";
import { useVideoContext } from "../context/VideoContext"; // Usar el contexto
import VideoCard from "../components/VideoCard";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const NoVideosText = styled.p`
  text-align: center;
  color: #777;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra las tarjetas en la página */
  gap: 2rem; /* Espacio entre las tarjetas */
  margin-top: 2rem;
`;

function Home() {
  const { videos } = useVideoContext();

  return (
    <Container>
      <Hero />
      {videos.length === 0 ? (
        <NoVideosText>No hay videos guardados.</NoVideosText>
      ) : (
        <CardsWrapper>
          {videos.map((video, index) => (
            <VideoCard key={index} index={index} video={video} />
          ))}
        </CardsWrapper>
      )}
    </Container>
  );
}

export default Home;
