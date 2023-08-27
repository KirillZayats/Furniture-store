import { styled } from "styled-components";
import { device, size } from '../../styled/Media/MediaQueryStyledComp';

const HeaderContentStyle = styled.header`
margin: 0 auto;
  @media ${device.mobileS} { 
    max-width: ${size.mobileS};
  }

  @media ${device.mobileM} {
    max-width: ${size.mobileM};
  }
  @media ${device.mobileL} { 
    max-width: ${size.mobileL};
  }

  @media ${device.tablet} {
    max-width: ${size.tablet};
  }
  @media ${device.tabletS} { 
    max-width: ${size.tabletS};
  }

  @media ${device.laptop} {
    max-width: ${size.laptop};
  }

  @media ${device.desktop} {
    max-width: ${size.desktop};
  }
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
