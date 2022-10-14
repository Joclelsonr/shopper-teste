import styled from "styled-components";

export const Container = styled.div`
  background-color: #0dab77;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0px;
  min-width: 450px;
  animation: showSidebar 0.4s;
  box-shadow: -2px 0 5px 0px #0dab77;
  overflow: auto;
  margin: auto;
  h2 {
    position: absolute;
    top: 80px;
    left: 20px;
    color: #fff;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 400px;
    }
  }
`;

export const Purchases = styled.table`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 120px;
  left: 10px;
  color: #fff;
  max-width: 380px;
  border-bottom: 1px solid lightgray;
  margin: 6px auto;
  padding: 8px;

  .textup {
    display: flex;
    justify-content: space-between;
    gap: 4px;
  }
  p {
    font-size: smaller;
  }
`;

export const Paragra = styled.p`
  position: absolute;
  top: 130px;
  left: 20px;
  color: #fff;
`;
