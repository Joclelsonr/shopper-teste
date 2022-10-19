import styled from "styled-components";
import { colors } from "../../constants/colors";

const Loading = () => {
  return <Load></Load>;
};
export default Loading;

const Load = styled.div`
  margin-top: 50px;
  width: 56px;
  height: 56px;
  display: grid;
  ::before,
  ::after {
    content: "";
    grid-area: 1/1;
    background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
      var(--c) 0 50%;
    background-size: 13.4px 13.4px;
    background-repeat: no-repeat;
    animation: spinner-3hs4a3 1s infinite;
  }
  ::before {
    --c: radial-gradient(farthest-side, ${colors.primary} 92%, #0000);
    margin: 4.5px;
    background-size: 9px 9px;
    animation-timing-function: linear;
  }
  ::after {
    --c: radial-gradient(farthest-side, ${colors.primary} 92%, #0000);
  }

  @keyframes spinner-3hs4a3 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;
