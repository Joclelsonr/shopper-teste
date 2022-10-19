import styled from "styled-components";
import { colors } from "../../constants/colors";

export const TitleH3 = styled.h3`
  text-align: center;
  color: ${colors.primary};
  margin: 6px;
`;

export const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 8px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  text-transform: uppercase;
  border-radius: 8px;
  margin: 6px 0;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: ${colors.hoverPrimary};
    cursor: pointer;
  }
`;

export const ButtonClear = styled.button`
  padding: 8px;
  background-color: ${colors.warning};
  color: ${colors.secondary};
  text-transform: uppercase;
  border-radius: 8px;
  margin: 6px 0;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: ${colors.hoverWarning};
    cursor: pointer;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  gap: 10px;
  box-shadow: 0 0 6px 1px lightgray;
  border-radius: 6px;
  margin: 8px 0;
  p {
    padding: 4px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    color: ${colors.warning};
    font-weight: bold;
    cursor: pointer;
  }
`;
