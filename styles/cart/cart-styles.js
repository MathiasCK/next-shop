import styled from "styled-components";

// index.js
export const StyledCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  & .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin: 0 1rem;
    border-bottom: 1px solid black;
    h1 {
      font-size: 1rem !important;
    }
    button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
  }
`;

export const Actions = styled.div`
  width: 100%;

  padding: 1rem;
  background: rgba(173, 216, 230, 0.4);
  position: absolute;
  bottom: 0;
  border-top: 1px solid black;
  & .price {
  }
  & .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

// cart-item.js
export const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

export const Information = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Image = styled.div`
  height: 150px;
  width: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;
