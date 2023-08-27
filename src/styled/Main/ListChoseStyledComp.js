import { styled } from "styled-components";

const ContainerListElemChoseStyle = styled.li`
`;

const NumberListChoseStyle = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const ContainerChoseStyle = styled.div`
  margin: 0px auto 30px;
`;

const TitleChoseContainerStyle = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const ContainerListChoseStyle = styled.ul`
display: flex;
flex-direction: column;
gap: 30px;
`;

export {
    NumberListChoseStyle,
    ContainerListElemChoseStyle,
    TitleChoseContainerStyle,
    ContainerChoseStyle,
    ContainerListChoseStyle
  }