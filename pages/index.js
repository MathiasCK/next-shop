import Link from "next/link";
import Button from "../components/button/button";
import CategoryList from "../components/category/category-list";
import { useCategories } from "../context/CartContext";

import { StyledHome, Content } from "../styles/home/home-styles";

import commerce from "../utils/commerce";

export default function Home({ merchant }) {
  const categories = useCategories();
  return (
    <div>
      <StyledHome>
        <h1 className="header">{merchant.business_name}</h1>

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
              <Button>Enter Shop</Button>
            </Link>
          </h3>
        </Content>
      </StyledHome>
    </div>
  );
}

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();

  return {
    props: {
      merchant,
    },
  };
}
