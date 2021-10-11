import { StyledCategory } from '../../styles/categories/category-styles';
import { fadeIn } from '../../utils/animation';
import Spinner from '../../utils/Spinner';

const Category = ({ name, description, slug }) => {
  if (!name || !description || !slug) {
    return <Spinner />;
  }
  return (
    <StyledCategory variants={fadeIn}>
      <a href={`/categories/${slug}`}>
        <div className='content'>
          <img src={description} />
          <p>{name}</p>
        </div>
      </a>
    </StyledCategory>
  );
};

export default Category;
