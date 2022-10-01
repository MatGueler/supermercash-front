import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 90px 20px 0 20px;
  background-color: grey;
`;

export const PerfilInfo = styled.div`
  width: 100%;
`;

export const PerfilImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid black;
  border-style: dashed;
  img {
    width: 400px;
    height: 400px;
    border-radius: 100%;
    object-fit: cover;
    margin-bottom: 20px;
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
