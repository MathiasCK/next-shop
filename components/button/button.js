import React from "react";
import styled from "styled-components";

const Button = ({ children, ...otherProps }) => {
  return (
    <div>
      <StyledButton {...otherProps}>{children}</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s ease;
  color: black;
  padding: 1rem;
  width: auto !important;
  &.inverted {
    border: 1px solid black;
    background: black;
    color: white;
  }
  &.intro {
    border: 1px solid white;
    background: transparent;
    color: white;
  }
`;

export default Button;
