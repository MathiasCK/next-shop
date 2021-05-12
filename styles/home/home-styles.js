import styled from "styled-components";

export const Introduction = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: saturate(180%) blur(5px);
    padding: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

export const About = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    padding: 2rem 5rem;
  }
  & .button {
    display: flex;
    width: 10%;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: var(--secondary);
  .categories {
    padding-top: 3.5rem;
    min-width: 100%;
  }
  h3 {
    text-align: center;
    color: #ff33e2;
  }
`;
