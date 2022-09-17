import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body, * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
h1, h2, h3, h4, h5, h6,  p, li, a{
    color: #0D4625;
}
.linked-btn {
    color: #219653;
    font-weight: 900;
    font-size: 1rem;
    display: grid;
    place-items: center;
    text-decoration: none;
    width: 9rem;
    height: 2.5rem;
    border: 3px solid #6fcf97;
    border-radius: 0.75rem;
    &:hover{
            background-color: #a8debf;
    }
}
.basic-container{
    padding: 2rem 6rem;
}
`;

export default GlobalStyle;
