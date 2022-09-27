import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffee51;

  h1 {
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-family: "Paytone One", sans-serif;
    margin-bottom: 60px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: black;
    color: #ffffff;
  }

  h1:hover {
    transform: translate(5px, 5px);
  }

  span:last-child {
    color: #ffe600;
  }

  form {
    width: 70%;
  }

  input:hover {
    transform: translate(2px, 2px);
    border: 1px solid gray;
  }

  p {
    width: 100%;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 30px;
    margin: 30px 0;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  box-sizing: border-box;
  background-color: #940f0f;

  img:active {
    transform: rotate(-20deg);
    position: relative;
    animation-name: example;
    animation-duration: 3s;

    @keyframes example {
      0% {
        left: 0px;
        top: 0px;
      }
      100% {
        left: 2000px;
        top: 0px;
      }
    }
  }

  img {
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
`;

export const TextLogo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 90px;
    font-family: "Dancing Script", cursive;
    box-sizing: border-box;
    color: #fff173;
  }

  h2:nth-child(2) {
    font-size: 60px;
    margin-top: 10px;
  }
`;

export const UserButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button:hover {
    transform: translate(2px, 2px);
  }

  button {
    width: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Clip = styled.div`
  position: absolute;
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  left: -30px;

  span {
    width: 60px;
    height: 10px;
    border-radius: 10px;
    background-color: black;
    box-shadow: 2px 2px 5px black;
  }
`;
