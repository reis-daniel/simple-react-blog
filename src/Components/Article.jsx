import React from "react";
// Components
import LinkedButton from "../Components/LinkedButton";
// Styled Components
import styled from "styled-components";

export default function Article(props) {
  return (
    <ArticleStyled>
      <img
        className="article-image"
        src={props.blogData.img_url}
        alt="article image"
      />
      <div className="article-info-container">
        <h2 className="article-headline">{props.blogData.title}</h2>
        <LinkedButton
          className="article-link"
          text="Read more"
          path={`/blog/${props.blogData.title.replace(" ", "-")}`}
        />
      </div>
    </ArticleStyled>
  );
}

const ArticleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  .article-image {
    height: 18rem;
    width: 22rem;
    border-radius: 0.6rem;
    object-fit: cover;
    object-position: center;
  }
  .article-headline {
    font-size: 1rem;
    font-weight: 900;
  }
  .article-info-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 0.5rem;
  }
`;
