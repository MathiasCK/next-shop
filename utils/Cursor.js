import { useEffect, useRef } from "react";
import styled from "styled-components";

const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    let placeX = 0;
    let placeY = 0;

    const handler = (e) => {
      if (!cursorRef.current) return;
      const { clientX, clientY } = e;
      const mouseX = clientX;
      const mouseY = clientY;
      placeX = mouseX - cursorRef.current.clientWidth;
      placeY = mouseY - cursorRef.current.clientHeight / 2;
      // cursorRef.current.style.transform = `translate3d(${
      //   mouseX - cursorRef.current.clientWidth / 2
      // }px, ${mouseY - cursorRef.current.clientHeight / 2}px, 0)`;
    };

    const move = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${placeX}px, ${placeY}px, 0)`;
    };

    const interval = setInterval(move, 10);

    // handler();

    document.addEventListener("mousemove", handler);

    return () => {
      document.removeEventListener("mousemove", handler);
      clearInterval(interval);
    };
  }, []);

  return <StyledCursor ref={cursorRef} />;
};

export default Cursor;

const StyledCursor = styled.div`
  position: fixed;
  height: 30px;
  top: 0;
  left: 0;
  width: 30px;
  z-index: 9999;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  mix-blend-mode: exclusion;
  will-change: transform;
  border-radius: 50%;
  pointer-events: none;
  display: none;
  transition: transform 0.2s ease-out;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
