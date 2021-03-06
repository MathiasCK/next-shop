import Link from 'next/link';
import Product from './product';

import React from 'react';
import Spinner from '../../utils/Spinner';
import RouteTransition from '../../utils/route-transition';
import { StyledProductList } from '../../styles/products/product-styles';
import { useRouter } from 'next/router';

const ProductList = ({ productsPerCategory, products }) => {
  if (products.length === 0) return <Spinner />;

  const router = useRouter();

  if (router.pathname === '/products') {
    if (productsPerCategory.length === 0) return <Spinner />;
    return (
      <RouteTransition>
        <div>
          {productsPerCategory.map(category => (
            <div key={category.name}>
              <center>
                <h1 style={{ padding: '1rem 0' }} className='header'>
                  {category.name.toUpperCase()}
                </h1>
              </center>

              <StyledProductList>
                {category.productsData.map(product => (
                  <div key={product.permalink} className='product'>
                    <li>
                      <Link href={`/products/${product.permalink}`}>
                        <a>
                          <Product {...product} />
                        </a>
                      </Link>
                    </li>
                  </div>
                ))}
              </StyledProductList>
            </div>
          ))}
        </div>
      </RouteTransition>
    );
  }

  return (
    <RouteTransition>
      <div>
        <StyledProductList>
          {products.map(product => (
            <div key={product.permalink} className='product'>
              <li>
                <Link href={`/products/${product.permalink}`}>
                  <div>
                    <a>
                      <Product {...product} />
                    </a>
                  </div>
                </Link>
              </li>
            </div>
          ))}
        </StyledProductList>
      </div>
    </RouteTransition>
  );
};

export default ProductList;
