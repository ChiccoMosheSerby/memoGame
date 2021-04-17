import styled, { keyframes } from "styled-components";
const PageLoader = keyframes`
    from {
         transform: rotate(0deg);
     }
     to {
         transform: rotate(360deg);
     }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  content: "";
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #fff;
  animation: ${PageLoader} 0.6s linear infinite;
  -webkit-animation: ${PageLoader} 0.6s linear infinite;
`;
