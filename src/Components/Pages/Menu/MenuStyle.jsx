import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 90px 20px 0 20px;
  box-sizing: border-box;
  background-color: #d9d9d9;
`;

export const Adverts = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const Map = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  border-radius: 10px;
  margin-bottom: 30px;

  iframe {
    border-radius: 10px;
    box-shadow: 2px 2px 8px gray;
  }
`;
