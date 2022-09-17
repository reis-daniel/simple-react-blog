import React from "react";
// Components
import LinkedButton from "../Components/LinkedButton";

// Styled Components
import styled from "styled-components";

// Assets
import bgImage from "../Assets/Img/blog-thumbnail.jpg";

export default function Home() {
  return (
    <>
      <HomeMainContainer>
        <img src={bgImage} alt="" />
        <div className="homepage-headline basic-container">
          <h1>
            Welcome to my <span>simple Blog</span>
          </h1>
          <LinkedButton text="Go to articles" path="/blog" />
        </div>
      </HomeMainContainer>
    </>
  );
}

const HomeMainContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    z-index: -1;
    object-fit: cover;
  }
  h1 {
    font-size: 2rem;
    font-weight: 900;
  }
  .homepage-headline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    height: 100%;
    span {
      display: block;
    }
  }
`;
