import { styled } from "styled-components";

const FooterContentStyle = styled.footer`
  width: 320px;
  padding: 30px 0;
`;

const TitleBlockStyle = styled.h4`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 25px;
  margin-bottom: 16px;
`;
const ListElementStyle = styled.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const LinkStyle = styled.a``;

const ContainerLinksStyle = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextReservedStyle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export {
  FooterContentStyle,
  TitleBlockStyle,
  ListElementStyle,
  LinkStyle,
  ContainerLinksStyle,
  TextReservedStyle,
};
