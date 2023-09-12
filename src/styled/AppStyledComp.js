import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";
import { device, size } from './Media/MediaQueryStyledComp';

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

button {
  font-size: 14px;
  cursor: pointer;

}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;

};

`;
const ContainerStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${device.mobileS} { 
    max-width: calc(${size.mobileS} - 20px);
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} { 
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 100px);
  }
  @media ${device.tabletS} { 
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 140px);
  }`;

const LinkUnderLineStyle = styled.a`
  text-decoration-line: underline;
`;


const ContainerLinkStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const BlockContentStyle = styled.section`
  margin: 0px auto;
  @media ${device.mobileS} {
    padding: 30px 0;
  }

  @media ${device.desktop} {
    padding: 55px 0;
  }
`;

const LinkStyle = styled.a`
  line-height: 24px;
`;

export {
  GlobalStyle,
  ContainerStyle,
  ContainerLinkStyle,
  BlockContentStyle,
  LinkUnderLineStyle,
  LinkStyle
};
