import styled from "styled-components";

export const StyledApp = styled.div`
  height: 100vh;
  position: relative;
  .head {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    background: ${(props) => (props.bg ? "black" : "white")};
  }
  .content {
    height: calc(100% - 200px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    background: ${(props) => (props.bg ? "black" : "white")};
  }
  .footer {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    background: ${(props) => (props.bg ? "black" : "white")};
  }
`;
export const Head = styled.div`
  text-align: center;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  width: 100%;
`;
export const Loguot = styled.div`
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  width: 25%;
  border-radius: 5000px;
  border: solid #fff 1px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  /* z-index:100; */
`;
