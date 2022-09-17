import blogData from "../data";
// Components
import Article from "../Components/Article";

export default function Blog() {
  // Im blog werden aus den einzelnen Items des Data-Array Article-Components via Map.

  return (
    <>
      {blogData.map((blogItem) => {
        return <Article blogData={blogItem} />;
      })}
      <div className="basic-container">Articles</div>
    </>
  );
}
