import styled from "styled-components";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

function EditVideoForm({ video, onSave }) {
  const [formData, setFormData] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Título del video"
      />
      <Select name="category" value={formData.category} onChange={handleChange}>
        <option value="comedia">Comedia</option>
        <option value="musica">Música</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="tecnologia">Tecnología</option>
        <option value="romance">Romance</option>
      </Select>
      <Input
        type="url"
        name="videoLink"
        value={formData.videoLink}
        onChange={handleChange}
        placeholder="Enlace del video"
      />
      <Input
        type="url"
        name="imageLink"
        value={formData.imageLink}
        onChange={handleChange}
        placeholder="Enlace de la imagen"
      />
      <TextArea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <Button type="submit">Guardar cambios</Button>
    </Form>
  );
}

export default EditVideoForm;
