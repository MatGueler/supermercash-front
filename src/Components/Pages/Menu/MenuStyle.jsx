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

export const ButtonsMenu = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 700px) {
    margin: 30px 0;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 60px;
    height: 60px;
    border: 1px solid gray;
    border-radius: 50%;
    box-shadow: 1px 1px 3px grey;
    cursor: pointer;
    margin: 0px 10px 10px 10px;
    background-color: #c7c7c7;
    box-sizing: border-box;
  }
`;

export const Map = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  margin-bottom: 30px;

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
