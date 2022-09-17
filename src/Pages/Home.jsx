import React from "react";
// Components
import LinkedButton from "../Components/LinkedButton";

export default function Home() {
  return (
    <>
      <div>
        <div>Background</div>
        <div>
          <h1>Welcome to my simple Blog</h1>
        </div>
        <LinkedButton text="Go to articles" path="/blog" />
      </div>
    </>
  );
}
