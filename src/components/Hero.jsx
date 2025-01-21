import styled from "styled-components";
import heroImage from "../assets/hero-image.png";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;
  color: white;
  margin-top: 180px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const HeroText = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroImage = styled.div`
  max-width: 45%;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 1.5rem;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      {/* Texto a la izquierda */}
      <HeroText>
        <HeroTitle>Bienvenido a Aluraflix</HeroTitle>
        <HeroDescription>
          Aquí puedes explorar videos educativos y de entretenimiento. ¡Mira
          nuestros videos y disfruta del contenido!
        </HeroDescription>
      </HeroText>

      {/* Imagen a la derecha */}
      <HeroImage>
        <img src={heroImage} alt="Video Thumbnail" />
      </HeroImage>
    </HeroContainer>
  );
}

export default Hero;
