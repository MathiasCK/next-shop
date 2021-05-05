import styled from "styled-components";

// index.js
export const StyledCart = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 0;
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
