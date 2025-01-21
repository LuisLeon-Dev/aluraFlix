import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: linear-gradient(90deg, #1d1d1d, #333);
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  color: #f9a826;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const NavLinks = styled.div`
  a {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    margin-right: 1.5rem;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: #f9a826;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Title>Aluraflix</Title>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/add-video">Add Video</Link>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
