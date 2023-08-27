import { styled } from "styled-components";

const ContainterCardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const ProductsStyle = styled.div`
  padding-top: 0.1px;
`;

const ContainerButtonStyle = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  `;

const ButtonViewAllStyle = styled.button`
  width: 105px;
  height: 45px;
  text-align: center;
  border: 1px solid ${({theme}) => theme.colors.mainColor};
  border-radius: 5px;
  background: ${({theme}) => theme.colors.secondColor};
`;

export {ContainterCardsStyle, ProductsStyle, ButtonViewAllStyle, ContainerButtonStyle};