import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeIn } from "../../utils/animation";

const Category = ({ name, description }) => {
  return (
    <StyledCategory variants={fadeIn}>
      <div className="content">
        <img src={description} />
        <p>{name}</p>
      </div>
    </StyledCategory>
  );
};

const StyledCategory = styled(motion.div)`
  .content {
    position: relative !important;
    height: 500px;
    width: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      background-position: center;
      background-size: cover;
    }
    p {
      background: rgba(255, 255, 255, 0.5);
      padding: 1rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      img {
        opacity: 0.9;
        //transform: scale(1.1);
        //transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      p {
        background: rgba(255, 255, 255, 1);
      }
    }
  }
`;

export default Category;
