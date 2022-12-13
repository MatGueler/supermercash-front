import styled from "styled-components";

export const BootBox = styled.div`
  position: fixed;
  width: 240px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 20px;
  border: 2px solid grey;
  cursor: pointer;
  padding: 0 10px;
  z-index: 2;
  right: 40px;
  bottom: 40px;

  animation-name: boot;
  animation-duration: 2s;
  background-color: #ffffff;

  img {
    height: 40px;
    margin-right: 10px;
  }

  @keyframes boot {
    0% {
      right: -100%;
    }

    100% {
      right: 40px;
    }
  }
`;

export const ChatBox = styled.div`
  position: fixed;
  width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  border: 2px solid grey;
  padding: 25px 10px 10px 10px;
  z-index: 2;
  right: 40px;
  bottom: 40px;

  p {
    width: 100%;
    height: fit-content;
  }

  .Questions {
    /* height: 100%; */
    width: 100%;
    position: relative;
    overflow-y: scroll;
  }
`;

export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  border-radius: 5px;
  border: 1px solid lightgrey;

  .ButtonAnswerBox {
    width: 100%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    flex-wrap: wrap;

    animation-name: buttons;
    animation-duration: 2s;

    @keyframes buttons {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  button {
    height: 20px;
    margin: 5px;
    border-radius: 5px;

    border: 0;

    box-sizing: border-box;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: 0;
  background-color: transparent;
  z-index: 2;
  cursor: pointer;
`;

export const HeaderQuestion = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  padding: 10px;
  box-sizing: border-box;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  p {
    text-align: center;
  }
`;
