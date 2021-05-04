import { css } from "styled-components";

export const breakpoint = {
  medium: "768px",
  large: "1000px",
};

export const media = {
  // ns = not small
  ns: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.medium}) {
        ${css(...args)}
      }
    `,
  medium: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.medium}) and (max-width: ${breakpoint.large}) {
        ${css(...args)}
      }
    `,
  large: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.large}) {
        ${css(...args)}
      }
    `,
};
