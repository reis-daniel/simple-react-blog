import React from "react";
// React Router
import { Link } from "react-router-dom";

export default function LinkedButton(props) {
  return (
    <Link className="linked-btn" to={props.path}>
      {props.text}
    </Link>
  );
}
