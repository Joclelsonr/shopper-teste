import styled from "styled-components";
import { colors } from "../../constants/colors";

export const TitleH3 = styled.h3`
  text-align: center;
  margin: 6px;
  color: ${colors.primary};
`;

export const ContainerSearch = styled.div`
  max-width: 600px;
  margin: 16px auto;
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
  p {
    padding: 4px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonAdd = styled.button`
  margin: 6px;
  border: none;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 8px;
  padding: 4px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    background-color: ${colors.hoverPrimary};
  }
`;

export const ButtonInd = styled.button`
  margin: 6px;
  color: ${colors.warning};
  border-radius: 8px;
  padding: 4px;
  cursor: not-allowed;
`;
