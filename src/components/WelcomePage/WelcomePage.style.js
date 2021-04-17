import styled, { css } from "styled-components";
import { gradient } from "../../style/gradient.style";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const SubmitButton = styled.button`
  height: 60px;
  border:none;
  text-align: center;
  width: 300px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${gradient}
  transition: all 0.2s ease-in-out;
  :hover {
    ${({ isLoading }) =>
      !isLoading &&
      css`
        transform: scale(1.2);
        cursor: pointer;
      `}
  }
  @media (max-width: 660px) {
    :hover {
      transform: none;
    }
  }
`;
