import styled from "styled-components";

export const FooterBox = styled.div`
  width: 100%;
  height: 200px;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background-color: #c51b1b;
  padding: 20px;
  z-index: 1;

  div {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }

  p {
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const Author = styled.div`
  border-right: 1px solid black;
`;

export const Contact = styled.div``;
