import styled from "styled-components";
import { colors } from "../../constants/colors";

export const InputContainer = styled.div`
  position: relative;
  label {
    position: absolute;
    left: 0;
    top: 14px;
    margin: 0 6px;
    z-index: -1;
    color: lightgray;
    transition: 0.2s ease-in-out;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid lightgray;
    background-color: transparent;
    border-radius: 8px;
    margin: 8px 0;
    outline: none;
    :focus ~ label,
    :valid ~ label {
      transform: translateY(-24px);
      font-size: 12px;
      color: ${colors.primary};
    }
  }
`;
