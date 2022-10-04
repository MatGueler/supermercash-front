import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 90px 20px 0 20px;
`;

export const PerfilInfo = styled.div`
  width: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
    color: black;
  }

  button {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      transform: translate(1px, 1px);
    }
  }
`;

export const BoxInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    width: 100px;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin: 0 10px 20px 0;

    :nth-child(2) {
      width: 60%;
    }
  }
`;

export const PerfilImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid black;
  border-style: dashed;
  padding-left: 20px;
  img {
    width: 400px;
    height: 400px;
    border-radius: 100%;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0px 0px 15px black;
  }

  p {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      transform: translate(1px, 1px);
    }
  }
`;

export const ProgressBarBox = styled.div`
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
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
