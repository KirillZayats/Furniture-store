import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}
`;
const ContainerStyle = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
`;

const ContainerLinkStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const BlockContentStyle = styled.section`
  padding: 30px 0;
  margin: 0px auto;
`;

export { GlobalStyle, ContainerStyle, ContainerLinkStyle, BlockContentStyle };
