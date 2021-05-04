import Link from "next/link";
import Button from "../components/button/button";
import CategoryList from "../components/category/category-list";
import { useCategories } from "../context/CartContext";

import { Content, Introduction } from "../styles/home/home-styles";

export default function Home() {
  const categories = useCategories();
  return (
    <div>
      <Introduction>
        <h1 className="background-text">Welcome!</h1>
      </Introduction>

      <Content>
        <div className="categories">
          <CategoryList categories={categories} />
        </div>

        <h3>
          <Link href="/products">View our new collection</Link>
        </h3>
      </Content>
    </div>
  );
}
