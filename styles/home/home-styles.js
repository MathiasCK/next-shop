import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  .categories {
    padding-top: 3.5rem;
  }
  h3 {
    text-align: center;
    color: #ff33e2;
  }
`;

export const Introduction = styled.div`
  //background-image: url("https://images.unsplash.com/photo-1500907789384-0c3b4c3bdce4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  position: relative;

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

  video {
    width: 100%;
    height: auto;
  }
`;
