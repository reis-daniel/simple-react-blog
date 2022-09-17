import blogData from "../data";

// Components
import Article from "../Components/Article";

// Styled Components
import styled from "styled-components";

export default function Blog() {
  // Im blog werden aus den einzelnen Items des Data-Array Article-Components via Map.

  return (
    <BlogArticles className="basic-container">
      {blogData.map((blogItem) => {
        return <Article blogData={blogItem} key={blogItem.id} />;
      })}
    </BlogArticles>
  );
}

const BlogArticles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4rem;
`;
