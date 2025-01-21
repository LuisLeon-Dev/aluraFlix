import styled from "styled-components";
import { useState } from "react";
import { useVideoContext } from "../context/VideoContext";
import Modal from "./Modal";
import EditVideoForm from "./EditVideoForm";

const Card = styled.div`
  width: 280px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const CardDescription = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: ${(props) => (props.secondary ? "#6c757d" : "#007bff")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.secondary ? "#5a6268" : "#0056b3")};
  }
`;

function VideoCard({ video, index }) {
  const { removeVideo, editVideo } = useVideoContext();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEdit = (updatedVideo) => {
    editVideo(index, updatedVideo);
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este video?")) {
      removeVideo(index);
    }
  };

  return (
    <>
      <Card>
        <CardImage src={video.imageLink} alt={video.title} />
        <CardContent>
          <CardTitle>{video.title}</CardTitle>
          <CardDescription>{video.description}</CardDescription>
          <ButtonContainer>
            <Button onClick={() => setModalOpen(true)}>Editar</Button>
            <Button secondary onClick={handleDelete}>
              Eliminar
            </Button>
          </ButtonContainer>
        </CardContent>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <EditVideoForm video={video} onSave={handleEdit} />
      </Modal>
    </>
  );
}

export default VideoCard;
