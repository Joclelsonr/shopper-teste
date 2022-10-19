import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  margin: 0 auto;
  h3 {
    text-align: center;
    margin: 6px;
    color: ${colors.primary};
  }
  table {
    margin: 12px auto;
    th {
      padding: 10px;
      color: ${colors.secondary};
      background-color: ${colors.primary};
    }
    td {
      text-align: center;
      border: 1px solid lightgray;
    }
  }
`;

export const Paragra = styled.p`
  color: ${colors.warning};
`;
