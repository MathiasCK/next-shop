import styled from "styled-components";

export const Inputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  input {
    border: none;
    border-bottom: 1px solid grey;
    outline: none;
    margin: 1rem 0.5rem;
    padding: 1rem;
    transition: all 0.3s ease;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;

export const Selects = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  .controls {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    select {
      padding: 1rem 0.5rem;
      border: none;
      border-bottom: 1px solid grey;
      outline: none !important;
      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const StyledReview = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .product {
    width: 25%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      padding: 1rem 0;
    }
  }
  .information {
    display: flex;
    justify-content: space-between;
    font-weight: lighter;
  }
`;
