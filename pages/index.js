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
          <center>
            <Link href="/products">
              <div>
                <Button className="intro">View 2021 Collection</Button>
              </div>
            </Link>
          </center>
        </div>
      </Introduction>

      <Content id="categories">
        <h1 className="background-text">Categories</h1>
        <div className="categories">
          <CategoryList categories={categories} />
        </div>
      </Content>
    </RouteTransition>
  );
}
