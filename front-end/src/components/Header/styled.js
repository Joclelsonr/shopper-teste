import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  box-shadow: 0px 0px 5px lightgray;
  background-color: #0dab77;
  /* position: fixed; */
  div {
    display: flex;
    flex-grow: 1;
  }
  ul {
    display: flex;
    flex-grow: 1;
    a {
      padding: 0 8px;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      display: flex;
    }
  }
  img {
    display: flex;
    width: 40px;
    margin-right: 6px;
    cursor: pointer;
    z-index: 1;
  }
`;
