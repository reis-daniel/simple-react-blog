import React from "react";
// React Router
import { Link } from "react-router-dom";
// Styled Components

export default function LinkedButton(props) {
  return <Link to={props.path}>{props.text}</Link>;
}
