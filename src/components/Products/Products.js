import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import * as categoriesService from '../services/categoriesService';
import "./Products.css";

const Products = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAll()
      .then((response) => {
        setCategories(response);
      });
  }, []);
  return (
    <>
      <h2 className="products-title">Our Guitars</h2>
      <div id="gallery" className="Gallery">
        <div className="container">
          <div className="row display_boxflex">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                { categories.map(x => <ProductCard categoryData={x} />)}
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Gallery_text">
              <div className="titlepage">
                <h2>Gallery</h2>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to usin
              </p>
              <a href="Javascript:void(0)">Read More</a>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
