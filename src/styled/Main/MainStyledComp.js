import { styled } from "styled-components";

const MainStyle = styled.main`
  width: 320px;
`;

const ImageMainBlockStyle = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid ${({theme}) => theme.colors.rearColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ImageMainContainerStyle = styled.div`
  width: 270px;
  height: 270px;
  background-image: url(${"https://via.assets.so/furniture.png?id=1&q=95&w=270&h=270&fit=fill"});
`;

const BlockButtonsStyle = styled.div`
  display: flex;
  gap: 20px;
`;

const BlackButtonInfoStyle = styled.button`
  width: 120px;
  height: 40px;
  background: ${({theme}) => theme.colors.mainColor};
  color: ${({theme}) => theme.colors.secondColor};
  text-align: center;
  border: 1px solid ${({theme}) => theme.colors.secondColor};
  border-radius: 5px;
`;
const WhiteButtonInfoStyle = styled.button`
  width: 120px;
  height: 40px;
  background: ${({theme}) => theme.colors.secondColor};
  color: ${({theme}) => theme.colors.mainColor};
  text-align: center;
  border: 1px solid ${({theme}) => theme.colors.mainColor};
  border-radius: 5px;
`;

const ArticleContainerStyle = styled.article`
  width: 300px;
  margin: 0 auto;
`;

const TitleMainBlockStyle = styled.h1`
  width: 300px;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const BoldTextStyle = styled.strong``;

const PreTitleStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 15px;
`;

const TitleBlockStyle = styled.h2`
  width: 300px;
  font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 130%;
`;

const TextCenterStyle = styled.div`
  text-align: center;
`;

const TextStyle = styled.p`
  width: 300px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 20px 0;
`;

const ContainerImageStyle = styled.div`
`;

const ImageAboutStyle = styled.img`
  width: 320px;
  height: 330px;
`;

const ContainerLinkStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const LinkStyle = styled.a`
  line-height: 24px;
`;

const IconArroyRightStyle = styled.img``;

const ContainerContactsStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export {
  MainStyle,
  IconArroyRightStyle,
  LinkStyle,
  TextCenterStyle,
  ContainerImageStyle,
  TextStyle,
  TitleBlockStyle, 
  PreTitleStyle,
  BoldTextStyle,
  TitleMainBlockStyle,
  ArticleContainerStyle,
  WhiteButtonInfoStyle,
  BlackButtonInfoStyle,
  BlockButtonsStyle,
  ImageMainBlockStyle,
  ImageAboutStyle,
  ImageMainContainerStyle,
  ContainerLinkStyle,
  ContainerContactsStyle
};
