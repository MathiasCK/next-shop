import { StyledCategory } from "../../styles/categories/category-styles";
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

export default Category;
