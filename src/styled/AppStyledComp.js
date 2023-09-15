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

const Swing = keyframes`
  20% { transform: rotate(3deg); } 
  40% { transform: rotate(-2deg); } 
  60% { transform: rotate(1deg); } 
  80% { transform: rotate(-1deg); } 
  100% { transform: rotate(0deg); } 
`;

const SwingText = keyframes`
    20% { transform: rotate(10deg); } 
    40% { transform: rotate(-7deg); } 
    60% { transform: rotate(3deg); } 
    80% { transform: rotate(-3deg); } 
    100% { transform: rotate(0deg); } 
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

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    scroll-behavior: smooth;
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

  a, button, input[type="checkbox"], li a, .block_hover, 
  .block__button_sale, svg, .block__link_hover {
    cursor: pointer;
  };

  a:hover, li:hover > a, li:hover > .block_hover, .block_hover:hover p, 
  .block__link_hover:hover, .block__button_sale:hover a, .container_setting:hover p,
  li:hover .header__title-block {
    color: ${({ theme }) => theme.colors.textButtonPayColor};
  };

  a:active, li:active > a, li:active > .block_hover, 
  input[type="checkbox"]:active, .block__link_hover:active, 
  .container_back:active path, .container_back:active p, 
  .block__button_sale:active svg, .block__button_sale:active a,
  .icon-search:active, .container_setting:active, #down-up:active {
    animation: ${Scale} 0.2s ease-in;
  };

  button:active, .button_dark:active, #icon_delete:active {
    animation: ${ScaleButton} .1s ease-in;
  }

  .icon-search:hover path, #icon_delete:hover path {
    fill: ${({ theme }) => theme.colors.mainColor};
  }

  #icon_delete path {
    fill: ${({ theme }) => theme.colors.buttonPayColor};
  }


  .block__button_sale path{
    fill: ${({ theme }) => theme.colors.secondColor};
  }

  a:hover img {
    filter: invert(48%) sepia(12%) saturate(641%) hue-rotate(181deg) brightness(90%) contrast(83%);
  }

  .container_back p, .container_back path, img, button, svg path, .container_setting p, .block_hover p{
    transition: all .2s ease-in;
  }

  .container_back:hover path {
    fill: ${({ theme }) => theme.colors.mainColor};
  }

  .block__link_hover:hover path, .block__button_sale:hover path, 
  .container_setting:hover path, li:hover .container_setting path,
  li:hover .container__link-cart path, .block_hover:hover path {
    fill: ${({ theme }) => theme.colors.textButtonPayColor};
  }

  .container_back:hover p {
    color: ${({ theme }) => theme.colors.mainColor};
  }

  .button_dark:hover {
    background: ${({ theme }) => theme.colors.lineTransitionPayColor};
    color: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }

  .button_special:hover {
    background: ${({ theme }) => theme.colors.secondColor};
    color: ${({ theme }) => theme.colors.mainColor};
  }

  .button_dark:hover path {
    fill: ${({ theme }) => theme.colors.mainColor};
  }

  .button_white:hover {
    background: ${({ theme }) => theme.colors.rearColor};
    color: ${({ theme }) => theme.colors.secondColor};
  }

  input, .inputs_card, textarea {
    transition: all .2s ease-in;
    outline-color: ${({ theme }) => theme.colors.rearColor}; 
  }

  .block-achievements:hover, .container_setting:hover svg,  
  li:hover .container_setting svg, #id_search_icon:hover, #container__icon-delete:hover {
    animation: ${Swing} .5s ease-in;
  }

 .container-social__image img:hover, .block_hover:hover .container__link-cart, 
  li:hover .container__link-cart{
    animation: ${SwingText} .5s ease-in;
  }

  @media ${device.laptop} {
    .block_product:hover img{
      animation: ${Swing} .5s ease-in;
    }
    .block_product:hover .price  {
      animation: ${SwingText} .5s ease-in;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  input:hover, .inputs_card:hover, textarea:hover {
    border-color: ${({ theme }) => theme.colors.rearColor}; 
    }


    @media ${device.laptop} {
      .container-search:hover {
      border: 1px solid ${({ theme }) => theme.colors.rearColor}; 
    }  
  }
    
  input:focus, textarea:focus {
    outline-color: ${({ theme }) => theme.colors.mainColor}; 
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
  transition: all 0.2s ease-in;
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
