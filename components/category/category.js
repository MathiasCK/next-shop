import { StyledCategory } from '../../styles/categories/category-styles';
import { fadeIn } from '../../utils/animation';
import Link from 'next/link';

const Category = ({ name, description, slug }) => {
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
