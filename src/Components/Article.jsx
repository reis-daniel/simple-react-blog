import React from "react";
// Components
import LinkedButton from "../Components/LinkedButton";

export default function Article(props) {
  return (
    <div>
      <img src={props.blogData.img_url} alt="article image" />
      <h2>{props.blogData.title}</h2>
      <LinkedButton
        text="Read more"
        path={`/blog/id:${props.blogData.id}${props.blogData.title
          .replace(" ", "")
          .toLowerCase()}`}
      />
    </div>
  );
}
