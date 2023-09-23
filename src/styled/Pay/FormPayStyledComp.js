import { styled } from "styled-components";
import { device, size } from "../../styled/Media/MediaQueryStyledComp";
import IconNumberCard from "../../resource/images/icons/pay/number_card.svg";
import IconBackCard from "../../resource/images/icons/pay/back_card.svg";
import Icon from "../../resource/images/icons/Icon";
import { Link } from "react-router-dom";

const Svg = styled(Icon)`
  width: 59px;
  height: 24px;
`;
const IconApplePay = ({ className }) => (
  <Svg viewBox="0 0 59 24" className={className}>
    <g id="Apple Pay" clipPath="url(#clip0_334_891)">
      <path
        id="XMLID 34"
        d="M11.0397 3.0942C10.3577 3.90485 9.26642 4.54424 8.17517 4.4529C8.03876 3.3568 8.57302 2.1922 9.19821 1.47288C9.88024 0.639391 11.0738 0.0456708 12.04 0C12.1537 1.14177 11.7104 2.2607 11.0397 3.0942ZM12.0286 4.66984C10.4486 4.5785 9.09591 5.57184 8.34567 5.57184C7.58407 5.57184 6.43599 4.71551 5.1856 4.73834C3.56009 4.76118 2.04825 5.68601 1.21845 7.1589C-0.486631 10.1047 0.775127 14.4662 2.42337 16.8639C3.23044 18.0514 4.19665 19.353 5.46978 19.3073C6.6747 19.2617 7.15212 18.5195 8.60712 18.5195C10.0735 18.5195 10.4941 19.3073 11.7672 19.2845C13.0858 19.2617 13.9156 18.0971 14.7227 16.9096C15.6434 15.5623 16.0185 14.2493 16.0413 14.1808C16.0185 14.1579 13.495 13.1874 13.4723 10.2645C13.4495 7.82112 15.4615 6.65652 15.5525 6.58801C14.4158 4.89819 12.6425 4.71551 12.0286 4.66984ZM21.1565 1.35871V19.1589H23.9074V13.0733H27.7154C31.1937 13.0733 33.6377 10.6755 33.6377 7.20457C33.6377 3.73359 31.2392 1.35871 27.8063 1.35871H21.1565ZM23.9074 3.68792H27.0788C29.4659 3.68792 30.83 4.9667 30.83 7.21598C30.83 9.46527 29.4659 10.7555 27.0674 10.7555H23.9074V3.68792ZM38.662 19.2959C40.3898 19.2959 41.9925 18.4167 42.72 17.0238H42.7769V19.1589H45.3231V10.2988C45.3231 7.72978 43.277 6.07421 40.1283 6.07421C37.207 6.07421 35.0472 7.75262 34.9676 10.059H37.4457C37.6503 8.96289 38.662 8.24358 40.0488 8.24358C41.7311 8.24358 42.6746 9.0314 42.6746 10.4814V11.4634L39.2417 11.6689C36.0475 11.863 34.3197 13.176 34.3197 15.4596C34.3197 17.7659 36.1043 19.2959 38.662 19.2959ZM39.4008 17.1836C37.9345 17.1836 37.0023 16.4757 37.0023 15.3911C37.0023 14.2721 37.9004 13.6213 39.6168 13.5186L42.6746 13.3245V14.3292C42.6746 15.9962 41.265 17.1836 39.4008 17.1836ZM48.7219 24C51.4046 24 52.6663 22.9724 53.769 19.8554L58.6 6.24548H55.8037L52.564 16.7612H52.5072L49.2675 6.24548H46.3916L51.0522 19.2046L50.8021 19.9924C50.3815 21.3283 49.6995 21.8421 48.4832 21.8421C48.2672 21.8421 47.8466 21.8192 47.6761 21.7964V23.9315C47.8353 23.9772 48.5173 24 48.7219 24Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_334_891">
        <rect
          width="58.2"
          height="24"
          fill="white"
          transform="translate(0.399994)"
        />
      </clipPath>
    </defs>
  </Svg>
);

const ContainerPayStyle = styled.form`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 20px);
    padding: 30px 0 0;
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 20px);
  }
  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} / 2 - 50px);
    margin: 0 50px 0 0;
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} / 2 - 50px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} / 2 - 50px);
    padding: 50px 0;
    max-width: 425px;
  }

  @media ${device.desktop} {
    margin: 0 140px 0 0;
    padding: 80px 0;
  }
`;

const ButtonPayStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  background: ${({ theme }) => theme.colors.mainColor};
  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
      transition: all .2s ease-in;

`;
const ButtonPayCardStyle = styled.button`
  width: 100%;
  height: 55px;
  background: ${({ theme }) => theme.colors.buttonPayColor};
  color: ${({ theme }) => theme.colors.textButtonPayColor};

  text-align: center;
  font-size: 20.565px;
  font-style: normal;
  font-weight: 500;
  line-height: 27.42px;

  border: 1px solid ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;

  margin: 35px auto;
`;

const LinkButtonStyle = styled(Link)`
  width: 100%;
`;

const ImgButtonPayStyle = styled.img``;
const ContainerTransitionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.veryRearColor};
  margin: 30px auto;
`;
const LineTransitionStyle = styled.div`
  height: 1px;
  width: 29%;
  background: ${({ theme }) => theme.colors.lineTransitionPayColor};
`;
const TextTransitionStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const ContainerInputStyle = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LabelInputStyle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.veryRearColor};
`;
const InputStyle = styled.input`
  width: auto;
  height: 25px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lineTransitionPayColor};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 5px 0px rgba(0, 0, 0, 0.08);
  padding: 10px 13px;

  color: ${({ theme }) => theme.colors.veryRearColor};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const ContainerSpecialInputsStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 91px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lineTransitionPayColor};
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 5px 0px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.colors.veryRearColor};
`;

const ContainerBackSpecialInputsStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
`;

const ContainerInputNumberCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin: 10px 13px;
`;

const LineHorizontalStyle = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.lineTransitionPayColor};
`;

const LineVerticalStyle = styled.div`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.colors.lineTransitionPayColor};
`;

const ContainerInputMonthCardStyle = styled.div`
  width: calc(50% - 1px);
  margin: 10px 13px;
  display: flex;
  align-items: center;
`;
const ContainerInputCVCCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 13px;
  align-items: center;
  width: calc(50% - 1px);
`;
const InputSpecialStyle = styled.input`
  max-width: 400px;
  border: none;
  outline: none;
  width: 100%;
  height: 25px;
  font-size: 18px;
`;

const InputCVCSpecialStyle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 25px;
  font-size: 18px;
`;

const ContainerImageCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;
const ImageCardStyle = styled.img`
  width: 26px;
  height: 17px;
`;

const ImageCardBackStyle = styled.div`
  width: 32px;
  height: 17px;
  background-repeat: no-repeat;
  background-image: url(${IconBackCard}), url(${IconNumberCard});
  background-position: left bottom, right top;
`;

const ContainerInputsStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;

  input::placeholder {
    font-style: normal;
    font-weight: 500;
    vertical-align: middle;
  }

  @media ${device.mobileS} {
    input::placeholder {
      font-size: 15px;
    }
  }

  @media ${device.mobileM} {
    input::placeholder {
      font-size: 18px;
    }
  }
`;

export {
  ContainerInputsStyle,
  ImageCardBackStyle,
  ImageCardStyle,
  ContainerImageCardStyle,
  InputCVCSpecialStyle,
  InputSpecialStyle,
  ContainerInputCVCCardStyle,
  ContainerInputMonthCardStyle,
  LineHorizontalStyle,
  LineVerticalStyle,
  ContainerInputNumberCardStyle,
  ContainerBackSpecialInputsStyle,
  ContainerSpecialInputsStyle,
  InputStyle,
  LabelInputStyle,
  ContainerInputStyle,
  TextTransitionStyle,
  LineTransitionStyle,
  ContainerTransitionStyle,
  ImgButtonPayStyle,
  ButtonPayCardStyle,
  ButtonPayStyle,
  ContainerPayStyle,
  IconApplePay,
  LinkButtonStyle
};
