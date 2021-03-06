import styled from "styled-components";

// index.js
export const StyledCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 17vh;
  -moz-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
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
  background: var(--secondary);
  border-top: 1px solid black;
  position: fixed;
  bottom: 0;
  height: 17vh;
  & .buttons {
    display: flex;
    width: 100%;
  }
`;

// cart-item.js
export const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  height: 20vh;
`;

export const Image = styled.div`
  width: 30%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Information = styled.div`
  width: 70%;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

export const Header = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .buttons {
    display: flex;
    button {
      border: none;
      background: transparent;
      margin: 0.25rem;
      cursor: pointer;
    }
  }
  .remove {
    font-weight: lighter;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
