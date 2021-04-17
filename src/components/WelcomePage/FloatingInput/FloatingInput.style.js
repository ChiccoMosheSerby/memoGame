import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #656565;
  position: relative;
  width: 100%;
  max-width: 320px;
  margin-top: 16px;
  margin-bottom: 16px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const Input = styled.input`
  width: 100%;
  align-self: center;
  margin: auto;
  height: 38px;
  line-height: 38px;
  border-radius: 4px;
  border: 1px solid #c5c5c5;
  background-color: #ffffff;
  outline: none;
  font-size: 16px;
  color: #656565;
  padding-left: 15px;
  padding-right: 15px;
  width: calc(100% - 30px);
  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgba(229, 48, 49, 0.59);
      background-color: #fff2f2;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid rgba(197, 197, 197, 0.5);
      background-color: #f8f8f9;
      cursor: not-allowed;
    `}
  :disabled {
    border: 1px solid rgba(197, 197, 197, 0.5);
    background-color: #f8f8f9;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  left: 30px;
  color: #656565;
  position: absolute;
  pointer-events: none;
  top: 0;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 0;
  background-color: white;
  transform: translateY(-50%);
  -webkit-transition: 0.1s ease all;
  transition: 0.19s ease all;
  input:focus ~ & {
    top: -10px;
    left: 0;
    font-size: 14px;
    background-color: transparent;
  }
  ${Input}:focus ~ & {
    top: -10px;
    left: 0;

    font-size: 14px;
    background-color: transparent;
  }
  ${({ error }) =>
    error &&
    css`
      left: 0;
      top: -10px;
      font-size: 14px;
      background-color: transparent;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      left: 0;
      top: -10px;
      font-size: 14px;
      background-color: transparent;
    `}
`;
