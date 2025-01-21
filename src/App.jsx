import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext"; // Contexto correctamente importado
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <VideoProvider>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-video" element={<AddVideo />} />
        </Routes>
      </Router>
    </VideoProvider>
  );
}

export default App;
