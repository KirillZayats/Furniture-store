import { styled } from "styled-components";
import ImageLamps from "../../resource/images/lamps.jpg";

const MainStyle = styled.main`
  width: 320px;
`;

const ImageMainBlockStyle = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #808080;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;

const ImageMainContainerStyle = styled.div`
  width: 270px;
  height: 270px;
  background-image: url(${"https://via.assets.so/furniture.png?id=1&q=95&w=270&h=270&fit=fill"});
`;

const BlockButtonsStyle = styled.div`
  display: flex;
  gap: 16px;
`;

const BlackButtonInfoStyle = styled.button`
  width: 120px;
  height: 48px;
  background: #000;
  color: #fff;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
`;
const WhiteButtonInfoStyle = styled.button`
  width: 120px;
  height: 48px;
  background: #fff;
  color: #000;
  text-align: center;
  border: 1px solid black;
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
  padding-top: 30px;
`;

const TitleBlockStyle = styled.h2`
  margin-top: 15px;
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
  padding-bottom: 30px;
`;

const ImageAboutStyle = styled.div`
  width: 320px;
  height: 330px;
  background-image: url(${ImageLamps});
  background-position: center;
  background-size: cover;
`;

const BlockAchievementsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 30px;
  width: 300px;
`;

const AchievementStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const AchievementNumberStyle = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
const AchievementTextStyle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;


const ContainerLinkStyle = styled.div`
  display: flex;
  gap: 8px;
`;

const LinkStyle = styled.a`
  line-height: 24px;
`;

const IconArroyRightStyle = styled.img``;


export {
  MainStyle,
  IconArroyRightStyle,
  LinkStyle,
  AchievementTextStyle,
  AchievementNumberStyle,
  AchievementStyle, 
  BlockAchievementsStyle,
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
  ContainerLinkStyle
};
