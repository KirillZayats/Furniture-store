import React from 'react'
import { styled } from "styled-components";

const ErrorMessageStyle = styled.p`
    color: red;
`;


const ErrorMessage = ({message}) => {
  return (
    <ErrorMessageStyle>{message}</ErrorMessageStyle>
  )
}

export default ErrorMessage