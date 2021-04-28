import Link from "next/link";
import CategoryList from "../components/category/category-list";
import { StyledHome, Content, Hero } from "../styles/home/home-styles";

import commerce from "../utils/commerce";

export default function Home({ categories, merchant }) {
  return (
    <div>
      <StyledHome>
        <h1>{merchant.business_name}</h1>

        {/*
      <h3>
        <Link href="/categories">
          <a>Categories</a>
        </Link>
</h3> */}

        <Content>
          <div className="categories">
            <CategoryList categories={categories} />
          </div>

          <h3>
            <Link href="/products">
              <a className="secondary">Enter Shop</a>
            </Link>
          </h3>
        </Content>
      </StyledHome>
    </div>
  );
}

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
      merchant,
    },
  };
}
