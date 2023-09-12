import { createGlobalStyle } from "styled-components";
import { styled, keyframes } from "styled-components";
import { device, size } from "./Media/MediaQueryStyledComp";

const Scale = keyframes`
    0% {
          transform: scale(1);

    }
      50% {
          transform: scale(1.1);
      }

      100% {
          transform: scale(1);
      }
  
`;

const ScaleButton = keyframes`
    0% {
          transform: scale(1);

    }
      50% {
          transform: scale(1.05);
      }

      100% {
          transform: scale(1);
      }
  
`;

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
  }

  button {
    font-size: 14px;
    display: inline-block;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  };

  a, button, input[type="checkbox"], li a {
    cursor: pointer;
  };

  a:hover, li:hover a, li:hover .div_hover {
    color: ${({ theme }) => theme.colors.textButtonPayColor};
  };

  a:active, li:active a, li:active .div_hover, input[type="checkbox"]:active {
    animation: ${Scale} 0.1s ease-in;
  };

  button:active {
    animation: ${ScaleButton} 0.3s ease-in;

  }

  a:hover img {
    filter: invert(48%) sepia(12%) saturate(641%) hue-rotate(181deg) brightness(90%) contrast(83%);
  }

  .container_back p, .container_back path, img, button{
    transition: all .2s ease-in;
  }

  .container_back:active path, .container_back:active p {
    animation: ${Scale} 0.1s ease-in;
  }

  .container_back:hover path {
    fill: ${({ theme }) => theme.colors.mainColor};
  }

  .container_back:hover p {
    color: ${({ theme }) => theme.colors.mainColor};
  }

  .button_dark:hover {
    background: ${({ theme }) => theme.colors.secondColor};
    color: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }

  button:hover path {
    fill: ${({ theme }) => theme.colors.mainColor};
  }

  input {
    transition: all .2s ease-in;
  }

  input:hover {
    border-color: ${({ theme }) => theme.colors.mainColor}; 
    }
    
  input:focus {
    outline-color: ${({ theme }) => theme.colors.rearColor}; 
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
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 140px);
  }
`;

const LinkUnderLineStyle = styled.a`
  display: inline-block;
  text-decoration-line: underline;
  transition: all 0.4s ease-in;
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
  transition: all 0.2s ease-in;
`;

export {
  GlobalStyle,
  ContainerStyle,
  ContainerLinkStyle,
  BlockContentStyle,
  LinkUnderLineStyle,
  LinkStyle,
  Scale,
};
