import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 90px 20px 0 20px;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const PerfilInfo = styled.div`
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  input {
    width: 60%;
  }

  h2 {
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
    color: black;
  }

  button {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      transform: translate(1px, 1px);
    }
  }

  @media (max-width: 880px) {
    padding: 0;
  }
`;

export const BoxInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  p {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    :nth-child(2) {
      width: 60%;
      justify-content: left;
      margin-right: 0;
    }
  }
`;

export const PerfilImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid black;
  border-style: dashed;
  padding-right: 20px;
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

  @media (max-width: 880px) {
    padding: 0;
    border: 0;

    img {
      width: 300px;
      height: 300px;
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
