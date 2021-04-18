import styled, { css } from "styled-components";

export const Toggle = styled.div`
  position: absolute;
  background-color: #32101c;
  color: #fff;
  left: 10px;
  cursor: pointer;
  top: 0;
  width: 55px;
  padding: 10px;
  ${({ open }) =>
    open &&
    css`
      left: 300px;
    `}
  transition: all .3s ease-in-out;
  @media (max-width: 660px) {
    left: 0px;
    top: -50px;
    ${({ open }) =>
      open &&
      css`
        left: 300px;
      `}
  }
`;
export const Sidebar = styled.div`
  transition: all 0.3s ease-in-out;
  z-index: 5000;
  position: absolute;
  left: -290px;
  height: calc(100vh - 200px);
  top: 0;
  width: 300px;
  ${({ open }) =>
    open &&
    css`
      left: 0;
    `}
  overflow: auto;
  background-color: #fff;
  &::-webkit-scrollbar {
    margin-right: 2px;
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(215, 215, 215, 0.9);
    border-radius: 10px;
    max-height: 94px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(215, 215, 215, 1);
  }
  overflow-y: auto;
  @media (max-width: 660px) {
    left: -310px;
    ${({ open }) =>
      open &&
      css`
        left: 0;
        top: -50px;
      `}
  }
`;
export const Top = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  border-bottom: black solid 1px;
  background-color: ${(props) => (props.head ? "#32101c" : "black")};
  color: #fff;
  div{
      flex:1;
      text-align: center;
    }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  .row {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: black solid 1px;
    div{
      flex:1;
      text-align: center;
    }
  }
  .best {
    background-color: #fafa50;
  }
`;
