import React from "react";

// React Router
import { useParams, useNavigate } from "react-router-dom";

// Styled Components
import styled from "styled-components";

import blogData from "../data";

export default function ArticleDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const articleData = blogData.filter(
    (item) => item.title.replace(" ", "-") === params.id
  )[0];

  return (
    <StyledArticleDetail>
      <img src={articleData.img_url} alt="" />
      <div className="article-container">
        <div className="article-header">
          <h2>{articleData.title}</h2>
          <h3>{articleData.published_date}</h3>
        </div>
        <div className="article-data">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            tenetur quos corporis quasi dolore facilis rerum, ipsam animi optio
            quas voluptas voluptates. Nihil, saepe cumque.
          </p>
          <h5>By {articleData.author}</h5>
        </div>
        <button
          className="linked-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </StyledArticleDetail>
  );
}

const StyledArticleDetail = styled.div`
  margin-top: 2rem;
  padding-left: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  img {
    max-height: 60vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.75rem 0 0 0.75rem;
  }
  .article-container {
    margin-top: 2rem;
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    .article-header {
      display: flex;
      justify-content: space-between;
    }
    .article-data {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 75%;
    }
  }
  button {
    background-color: transparent;
  }
`;
