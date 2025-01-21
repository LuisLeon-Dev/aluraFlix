import styled from "styled-components";
import { useState } from "react";
import { useVideoContext } from "../context/VideoContext"; // Usar el contexto

// Contenedor principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: #f5f5f5;
  min-height: 100vh;
`;

// Título
const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Estilo para los formularios
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: auto;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

// Campos de entrada
const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

// Dropdown
const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
  background: #fff;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

// Área de texto
const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

// Contenedor de botones
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Estilos para los botones
const Button = styled.button`
  padding: 12px 30px;
  background: ${(props) => (props.secondary ? "#6c757d" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.secondary ? "#5a6268" : "#0056b3")};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

// Botón deshabilitado
const DisabledButton = styled(Button)`
  background: #cccccc;
  cursor: not-allowed;

  &:hover {
    background: #cccccc;
  }
`;

function AddVideo() {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    videoLink: "",
    imageLink: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData); // Agregar el video al contexto y guardarlo en localStorage
    setFormData({
      title: "",
      category: "",
      videoLink: "",
      imageLink: "",
      description: "",
    });
    alert("¡Video agregado con éxito!");
  };

  const handleClear = () => {
    setFormData({
      title: "",
      category: "",
      videoLink: "",
      imageLink: "",
      description: "",
    });
  };

  return (
    <Container>
      <Title>Agregar un nuevo video</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Título del video"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="comedia">Comedia</option>
          <option value="musica">Música</option>
          <option value="entretenimiento">Entretenimiento</option>
          <option value="tecnologia">Tecnología</option>
          <option value="romance">Romance</option>
        </Select>
        <Input
          type="url"
          name="videoLink"
          placeholder="Enlace del video"
          value={formData.videoLink}
          onChange={handleChange}
          required
        />
        <Input
          type="url"
          name="imageLink"
          placeholder="Enlace de la imagen"
          value={formData.imageLink}
          onChange={handleChange}
          required
        />
        <TextArea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <ButtonContainer>
          <Button type="submit">Guardar</Button>
          <Button type="button" secondary onClick={handleClear}>
            Limpiar
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

export default AddVideo;
