import Link from "next/link";
import Button from "../components/button/button";
import CategoryList from "../components/category/category-list";
import { useCategories } from "../context/CartContext";

import { Content, Introduction } from "../styles/home/home-styles";
import RouteTransition from "../utils/route-transition";

export default function Home() {
  const categories = useCategories();
  return (
    <RouteTransition>
      <Introduction>
        <video autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4"></source>
        </video>
        <div className="content">
          <h1>Welcome to my Shop!</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button className="inverted">Enter Shop</Button>
            <Button href="#categories" className="inverted">
              View categories
            </Button>
          </div>
        </div>
      </Introduction>

      <Content id="categories">
        <div className="categories">
          <CategoryList categories={categories} />
        </div>

        <h3>
          <Link href="/products">View our new collection</Link>
        </h3>
      </Content>
    </RouteTransition>
  );
}
