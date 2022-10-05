import styled from "styled-components";

export const PaymentContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #adadad39;
  z-index: 2;
`;

export const PaymentBox = styled.div`
  width: 50%;
  border-radius: 10px;
  background-color: #ffe77e;
  border: 1px solid grey;
  padding: 20px;
  box-sizing: border-box;
  z-index: 3;

  input {
    border: 1px solid lightgray;
    :hover {
      transform: translate(1px, 1px);
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    :hover {
      transform: translate(1px, 1px);
      border: 2px solid black;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

export const TotalValueBox = styled.div`
  width: 100%;
  height: 60px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #a7ffa4;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;
