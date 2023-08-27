import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";
import { device, size } from '../styled/Media/MediaQueryStyledComp';

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
}

input:focus, textarea:focus {
         outline: none;
         border-color: ${({ theme }) => theme.colors.rearColor};
    }

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
    max-width: calc(${size.tabletS} - 20px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 20px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 20px);
  }`;

const LinkUnderLineStyle = styled.a`
  text-decoration-line: underline;
`;

const ContainerLinkStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const BlockContentStyle = styled.section`
  padding: 30px 0;
  margin: 0px auto;
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
