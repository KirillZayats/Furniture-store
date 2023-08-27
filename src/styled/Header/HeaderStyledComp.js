import { styled } from "styled-components";

const HeaderContentStyle = styled.header`
  width: 320px;
`;

const HeaderBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
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
  LineStyle,
  SearchStyle,
  SearchIconStyle,
  HeaderBlockStyle
};
