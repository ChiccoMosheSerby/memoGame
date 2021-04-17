import styled, { css } from "styled-components";

export const LightBulb = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 50%;
  border: solid #696969e5 1px;
  ${({ on, color }) =>
    on
      ? css`
          background-color: ${color};
        `
      : css`
          background-color: transparent;
        `}
  outline: none;
  z-index: 1;
  cursor: pointer;
  .bulbSvg {
    opacity: 0.1;
    height: 70%;
    width: auto;
  }

  &:active {
    background-color: ${(props) => props.color && props.color};
    border: solid #fff 1px;
  }
  @media (max-width: 660px) {
    width: 50%;
    height: 33.3%;
  }
`;
