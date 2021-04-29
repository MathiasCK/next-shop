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
  background: transparent;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s ease;
  color: black;
  padding: 0.5rem;
  &:hover {
    color: white;
    background: black;
  }
`;

export default Button;
