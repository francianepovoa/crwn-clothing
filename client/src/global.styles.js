//It creates a GlobalStyle component that will be added to every page of the website.
import { createGlobalStyle } from "styled-components";

/*
1. It’s creating a global style that will be applied to the entire document.
2. It’s setting the font-family to Open Sans Condensed.
3. It’s setting the padding to 20px on the body element.
4. It’s setting the padding to 10px on the body element if the screen is less than 800px wide.
5. It’s setting the text-decoration to none on all anchor elements.
6. It’s setting the color of all anchor elements to black.
7. It’s setting the box-sizing to border-box on all elements.
*/
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 40px;
    @media screen and (max-width: 800px){
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
