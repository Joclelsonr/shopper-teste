import styled from "styled-components";

export const TitleH3 = styled.h3`
  text-align: center;
  margin: 6px;
  color: #0dab77;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 12px auto;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  gap: 10px;
  box-shadow: 0 0 6px 1px lightgray;
  border-radius: 6px;
  margin: 8px;
  /* background-color: #e8f9f3; */
  p {
    padding: 4px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    margin: 6px;
    border: none;
    background-color: #0dab77;
    color: #fff;
    border-radius: 8px;
    padding: 4px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    :hover {
      background-color: #52e092;
    }
  }
`;
