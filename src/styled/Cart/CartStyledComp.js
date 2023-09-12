import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";

const ContainerCartStyle = styled.article`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 100px);
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 100px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 240px);
    padding: 55px 0;
  }
`;

const ListProductsStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
`;

const ButtonInPayStyle = styled.button`
  width: 100%;
  height: 45px;
  background: ${({ theme }) => theme.colors.buttonPayColor};
  color: ${({ theme }) => theme.colors.secondColor};

  text-align: center;
  font-size: 20.565px;
  font-style: normal;
  font-weight: 500;
  line-height: 27.42px;

  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
`;
const ContainerPayInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 10px;
  height: 82px;
  @media ${device.tablet} {
    margin: 0;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    background: ${({ theme }) => theme.colors.lineTransitionPayColor};
    border-radius: 5px;
  }
  @media ${device.laptop} {
    width: 30%;
  }
  @media ${device.desktop} {
    width: 25%;
  }
`;
const ContainerMainBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.desktop} {
    width: 70%;
  }
`;

const ContainerTitlePageStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerCheckboxStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
const IconClearStyle = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const InputSelectAllStyle = styled.input`
  accent-color: ${({ theme }) => theme.colors.buttonPayColor};
`;

export {
  InputSelectAllStyle,
  IconClearStyle,
  ContainerCartStyle,
  ContainerCheckboxStyle,
  ContainerPayInfoStyle,
  ContainerTitlePageStyle,
  ContainerMainBlockStyle,
  ButtonInPayStyle,
  ListProductsStyle,
};
