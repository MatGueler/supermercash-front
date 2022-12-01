import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-size: 25px;
  border: 0;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  background-color: ${(props) => props.color};
  cursor: pointer;
  overflow: hidden;
`;
