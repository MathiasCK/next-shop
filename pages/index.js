import Link from "next/link";
import Button from "../components/button/button";
import CategoryList from "../components/category/category-list";
import { useCategories } from "../context/AppContext";
import { AiOutlineArrowRight } from "react-icons/ai";

About;
import RouteTransition from "../utils/route-transition";
import { About, Content, Introduction } from "../utils/home-styles";

export default function Home() {
  const categories = useCategories();
  return (
    <RouteTransition>
      <Introduction>
        <video autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4"></source>
        </video>
        <div className="content">
          <center>
            <h1 className="header">Welcome to my Shop!</h1>
            <p className="sub-heading">A RANGE OF PRODUCTS FOR YOU</p>
            <Link href="/products">
              <div>
                <Button className="intro">SHOP NOW</Button>
              </div>
            </Link>
          </center>
        </div>
      </Introduction>
      <About>
        <h1 className="sub-header">
          Manufacturing is based in Milan with a core value of the brand to be
          made from the best available and particular opinion regarding fabric,
          fit and fabrication.
        </h1>
        <Link href="/about">
          <div className="button">
            <p style={{ cursor: "pointer" }}>Find out more</p>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </About>
      <Content id="categories">
        <h1 className="background-text">Categories</h1>
        <div className="categories">
          <CategoryList categories={categories} />
        </div>
      </Content>
    </RouteTransition>
  );
}
