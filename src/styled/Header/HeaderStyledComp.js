import { styled } from "styled-components";

const HeaderContentStyle = styled.header`
  width: 320px;
`;

const HeaderBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
`;


const LogotypeIconStyle = styled.img`
  margin: 0;
`;

const LogotypeTitleStyle = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 25.067px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SearchStyle = styled.div`
  margin: 0;
`;

const SearchIconStyle = styled.img`
  margin-top: 4px;
`;

const LineStyle = styled.div`
  height: 2px;
  width: 100%;
  background: ${({theme}) => theme.colors.rearColor};
`;

export {
  HeaderContentStyle,
  LogotypeIconStyle,
  LogotypeTitleStyle,
  LineStyle,
  SearchStyle,
  SearchIconStyle,
  HeaderBlockStyle
};
