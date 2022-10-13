import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 90px 20px 0 20px;
  position: relative;
  background-color: #d9d9d9;
  overflow: hidden;
  margin-bottom: 120px;

  button {
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  button:hover {
    transform: translate(2px, 2px);
    border: 1px solid black;
  }
`;

export const TitleQuestion = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  font-size: 30px;
  border-radius: 10px;
  color: #ffffff;
  margin-bottom: 20px;
  background-color: #a09b9b;

  h3 {
    font-family: "Paytone One", sans-serif;
  }

  svg {
    cursor: pointer;
  }
`;

export const QuestionsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
  box-sizing: border-box;

  :last-child() {
    margin: 0;
  }
`;

export const Question = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid grey;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;

  h1 {
    max-height: 80px;
    padding-bottom: 10px;
    font-size: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    max-height: 100px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
`;

export const ReactionsButtons = styled.div`
  position: absolute;
  display: flex;
  right: 10px;
  bottom: 10px;

  button {
    width: 20px;
    height: 20px;
    border: 0;
    background-color: transparent;
    margin: 0 15px;

    :first-child {
      color: green;
    }

    :nth-child(2) {
      color: red;
    }

    :hover {
      border: 0;
    }
  }
`;

export const NewQuestionBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffee009d;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input:hover {
    border: 1px solid black;
  }

  button {
    margin: 0;
  }
`;

export const Br = styled.br`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const Product = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  padding: 20px 10px;

  :last-child {
    border-bottom: 0;
  }

  p {
    width: 100px;
    height: 60px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 20px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 600px) {
    p {
      width: 50px;
      font-size: 15px;
    }
    img {
      margin-bottom: 10px;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100px;
    display: flex;
    flex-direction: column;

    p {
      width: 100px;
      word-break: break-all;
    }
  }
`;

export const Add = styled.div`
  width: 100px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg:first-child {
    margin-bottom: 5px;
  }

  @media (max-width: 600px) {
    width: 50px;
  }
`;

export const CartButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;

    button {
      width: 100%;
    }
  }
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  z-index: 2;
`;
