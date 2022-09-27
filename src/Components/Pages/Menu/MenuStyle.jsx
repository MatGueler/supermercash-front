import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 90px 20px 0 20px;
  position: relative;
  background-color: #d9d9d9;
  overflow: hidden;
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
  overflow-x: scroll;

  img {
    width: 300px;
    height: 100%;
    margin: 0 20px;
    /* object-fit: cover; */
  }

  /* img:nth-child(1) {
    animation-name: example;
    animation-duration: 16s;
    animation-iteration-count: infinite;
    animation-delay: 8s;

    @keyframes example {
      0% {
        left: -900px;
      }
      50% {
        left: 0px;
      }
      100% {
        left: 900px;
      }
    }
  }

  img:nth-child(2) {
    animation-name: example;
    animation-duration: 16s;
    animation-iteration-count: infinite;

    @keyframes example {
      0% {
        left: -900px;
      }
      50% {
        left: 0px;
      }
      100% {
        left: 900px;
      }
    }
  } */
`;

export const ButtonsMenu = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;

  button {
    width: 60px;
    height: 60px;
    border: 1px solid gray;
    border-radius: 50%;
    box-shadow: 1px 1px 3px grey;
    cursor: pointer;
    margin: 0 10px;
    background-color: #c7c7c7;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  border-radius: 10px;

  iframe {
    border-radius: 10px;
    box-shadow: 2px 2px 8px gray;
  }
`;
