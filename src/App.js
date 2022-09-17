// React Router
import { Routes, Route } from "react-router-dom";
// Components
import Navbar from "./Components/Navbar";
// Pages
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import ArticleDetail from "./Pages/ArticleDetail";
import ErrorPage from "./Pages/ErrorPage";

// Styled Components
import GlobalStyle from "./Components/GlobalStyle";
import styled from "styled-components";

function App() {
  return (
    <AppStyled className="app">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  height: 100vh;
`;
