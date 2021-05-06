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
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  .remove {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Information = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  .info {
    font-size: 2rem;
    font-weight: lighter;
  }
  .price {
    display: flex;
    .qty {
      margin-left: 0.25rem;
    }
  }
  button {
    margin-right: 1rem;
    padding: 0.25rem 0.5rem !important;
  }

  .buttons {
    display: flex;
  }
`;

export const Image = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
