import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #c51b1b;
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;

  h1 {
    display: flex;
    align-items: center;
    font-size: 30px;
    cursor: pointer;

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  span {
    font-family: "Paytone One", sans-serif;
  }

  span:last-child {
    color: #ffe600;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export const SearchBox = styled.div`
  width: 60%;
  display: flex;

  input {
    width: 100%;
    height: 40px;
    font-size: 20px;
    display: flex;
    border: 0;
    border-radius: 10px;
    padding: 0 10px;
    margin: 0 30px;
    box-sizing: border-box;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Perfil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  img {
    width: 40px;
    height: 40px;
    background-color: grey;
    border: 0;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 0 10px;
    object-fit: cover;
    cursor: pointer;
  }

  p {
    width: 100px;
    margin: 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;
