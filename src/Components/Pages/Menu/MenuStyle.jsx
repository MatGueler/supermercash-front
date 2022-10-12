import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 90px 20px 0 20px;
  position: relative;
  background-color: #d9d9d9;
  box-sizing: border-box;
`;

export const Adverts = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  box-shadow: 0 0 8px #afafaf;

  img {
    width: 300px;
    height: 100%;
  }

  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-align: center;
    font-size: 60px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Panel = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  border-radius: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  animation-name: example;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  background-color: #ffffff;

  @keyframes example {
    0% {
      left: -110%;
    }
    50% {
      left: 0;
    }
    100% {
      left: 110%;
    }
  }
`;

export const AlertsBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  box-sizing: border-box;

  /* @media (max-width: 700px) {
    display: none;
  } */
`;

export const Alert = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffee009d;
  border-radius: 10px;
  box-shadow: 0 0 8px #c7ba00;
  cursor: pointer;

  margin: 20px;

  :hover {
    width: 440px;
    height: 240px;
    background-color: #ffd90063;
    margin: 0;
    /* transform: translate(1px, 1px); */

    p {
      width: 80%;
      font-size: 50px;
    }
  }

  p {
    width: 70%;
    text-align: center;
    font-size: 40px;
    font-family: "Paytone One", sans-serif;
  }

  @media (max-width: 920px) {
    width: 200px;
    height: 100px;
    :hover {
      p {
        font-size: 30px;
      }
    }

    p {
      width: 70%;
      text-align: center;
      font-size: 20px;
      font-family: "Paytone One", sans-serif;
    }
  }
`;

export const ButtonsMenu = styled.div`
  width: 100%;
  max-height: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 8px #921111;
  background-color: #c51b1b;

  @media (max-width: 700px) {
    margin: 30px 0;
  }
`;

export const ButtonsMessage = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;

  h3 {
    text-align: center;
    max-width: 250px;
    font-size: 30px;
    margin-right: 20px;
    color: #ffffff;
    font-weight: bold;
  }

  svg {
    color: #ffffff;
    position: relative;
    animation-name: ex;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes ex {
    0% {
      left: 0px;
      top: 0px;
    }
    50% {
      left: 20px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  button {
    width: 60px;
    height: 60px;
    border: 1px solid gray;
    border-radius: 50%;
    box-shadow: 1px 1px 3px grey;
    cursor: pointer;
    margin: 0px 20px 10px 20px;
    background-color: #c7c7c7;
    box-sizing: border-box;
  }

  p {
    text-align: center;
    width: 80px;
    word-wrap: break-word;
    color: #ffffff;
    font-weight: bold;
  }
`;

export const Map = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 30px;

  h3 {
    width: 50%;
    text-align: center;
    font-size: 30px;
    font-family: "Paytone One", sans-serif;
    padding: 0 20px;
  }

  iframe {
    border-radius: 10px;
    box-shadow: 2px 2px 8px gray;
  }
`;

export const LoadingBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  z-index: 2;
`;
