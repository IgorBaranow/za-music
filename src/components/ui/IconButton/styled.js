import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: ${(props) => props.width || 20}px;
  height: ${(props) => props.width || 20}px;
  cursor: pointer;
  transition: opacity ease-in-out 0.1s;

  // If props.withBackground is true I apply additional CSS. After && inside ' ' I can write css, but it will be not highlited and hard to read, so i import {css} and write code after css'...'
  ${(props) =>
    props.withBackground &&
    css`
      border-radius: 50%;
      background-color: ${(props) => props.backgroundColor || props.theme.colors.lightWhite};
    `}

  &:hover {
    opacity: 0.6;
  }
`;
