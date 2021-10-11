import Link from 'next/link';
import Category from './Category';
import { useAnimation } from 'framer-motion';
import { sectionAnimation } from '../../utils/animation';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import Spinner from '../../utils/Spinner';
import { StyledCategories } from '../../styles/categories/category-styles';

const CategoryList = ({ categories }) => {
  if (categories.length === 0) return <Spinner />;
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const animatedRef = useRef(false);

  useEffect(() => {
    if (inView && !animatedRef.current) {
      controls.start('show');
      animatedRef.current = true;
    }
    if (!inView && !animatedRef.current) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <StyledCategories
      exit='exit'
      variants={sectionAnimation}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      {categories.map(category => (
        <Category key={category.name} {...category} />
      ))}
    </StyledCategories>
  );
};

export default CategoryList;
