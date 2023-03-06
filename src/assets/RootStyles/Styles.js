import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --gradient: linear-gradient( to right, #ff3c5f, #9340ff );
  }

* {
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #101728;
}
`