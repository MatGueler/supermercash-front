import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 90px 20px 0 20px;
  position: relative;
  background-color: #d9d9d9;
  overflow: hidden;

  button {
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  button:hover {
    transform: translate(2px, 2px);
    border: 1px solid black;
  }
`;

export const ProductsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const Legend = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  border-bottom: 1px solid grey;

  p {
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100px;
    overflow: hidden;
    word-break: break-all;
  }

  p:first-child {
    width: 200px;
  }

  @media (max-width: 600px) {
    p {
      width: 50px;
      overflow: hidden;
      word-break: break-all;
    }

    p:first-child {
      display: flex;
      flex-direction: column;
      width: 100px;
    }
  }
`;

export const Product = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
  padding: 20px 10px;

  p {
    width: 100px;
    display: flex;
    text-align: center;
    justify-content: center;
    word-break: break-all;
  }

  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 600px) {
    p {
      width: 50px;
    }
    img {
      margin-bottom: 10px;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100px;
    display: flex;
    flex-direction: column;

    p {
      width: 100px;
      word-break: break-all;
    }
  }
`;

export const Add = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg:first-child {
    margin-bottom: 5px;
  }

  @media (max-width: 600px) {
    width: 50px;
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
