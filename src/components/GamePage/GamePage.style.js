import styled, { css } from "styled-components";
import { gradient } from "../../style/gradient.style";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

`;
export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 660px;
  margin: auto;
  height: calc(100% - 100px);
  ${gradient}
  position: relative;
`;

export const Play = styled.div`
  background-color:rgba(0, 0, 0, 0.37);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: background-color 0.2s ease-in-out;
  img {
    width: 60%;
    height: auto;
  }
`;
export const Top = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: fit-content;
  cursor: pointer;
  padding: 10px;
  height: 100px;
  max-width: 660px;
  margin: auto;
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #873452;
    width: 40%;
    height: 70px;
    border-radius: 8000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;

    @media (max-width: 660px) {
      height: 60px;
      font-size: 1.2rem;
    }
  }
`;

export const Sound = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5000px;
  background: rgb(0, 255, 212);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffd4",endColorstr="#ffffff",GradientType=1);
  ${({ noSound }) =>
    noSound
      ? css`
          background: -moz-linear-gradient(
            90deg,
            rgba(0, 255, 212, 1) 5%,
            rgba(255, 255, 255, 1) 65%
          );
          background: -webkit-linear-gradient(
            90deg,
            rgba(0, 255, 212, 1) 5%,
            rgba(255, 255, 255, 1) 65%
          );
          background: linear-gradient(
            90deg,
            rgba(0, 255, 212, 1) 5%,
            rgba(255, 255, 255, 1) 65%
          );
        `
      : css`
          background: -moz-linear-gradient(
            -90deg,
            rgba(0, 255, 212, 1) 5%,
            rgba(255, 255, 255, 1) 65%
          );
          background: -webkit-linear-gradient(
            -90deg,
            rgba(0, 255, 212, 1) 5%,
            rgba(255, 255, 255, 1) 65%
          );
          background: linear-gradient(
            -90deg,
            rgba(0, 255, 212, 1) 5%,
            rgba(255, 255, 255, 1) 65%
          );
        `}
  margin-bottom: 48px;
  @media (max-width: 660px) {
    height: 60px;
    width: 60px;
  }
`;
