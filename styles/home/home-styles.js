import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  padding: 0;
  background-size: cover;
  background-position: center center;
  object-fit: cover;
  overflow: hidden;
  background-attachment: fixed;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1496115898806-2b023a9dcb6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80");
  .title {
    position: absolute;
    font-size: 3rem;
    top: 30%;
    left: 10%;
    text-align: left;
    transform: translate(-10%, -30%);
    color: white;
  }
`;

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-weight: lighter;
  }
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: center;
    color: #ff33e2;
  }
`;
