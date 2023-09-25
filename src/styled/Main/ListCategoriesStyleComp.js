import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";
import { Link } from "react-router-dom";

const ListCategoriesStyle = styled.div`
  display: flex;
  justify-content: end;
  margin: 0px auto;
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

const ListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 30px;
`;

const ElementListStyle = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in;
  padding: 10px 0 0;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in;
    margin-top: 5px;
  }
  &:hover::after {
    width: 100%;
    background: ${({ theme }) => theme.colors.mainColor};
  }
  &:hover a {
    color: ${({ theme }) => theme.colors.textButtonPayColor};
  }
`;
const TextElementStyle = styled(Link)`
    transition: all 0.3s ease-in;
    &:visited, &:link {
      color: ${({ theme }) => theme.colors.mainColor};
    }
`;

export {
    TextElementStyle,
    ElementListStyle,
    ListStyle,
    ListCategoriesStyle,
}