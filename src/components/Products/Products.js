import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import * as categoriesService from "../../services/categoriesService";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAll().then((response) => {
      setCategories(response);
    });
  }, []);
  return (
    <>
      <h2 className="products-title">See our current categories or</h2>
      <div className="col-md-12">
        <div className="text-bg">
          <Link to="add-category">Add New One</Link>
        </div>
      </div>
      <div id="gallery" className="Gallery">
        <div className="container">
          <div className="row display_boxflex">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {categories.map((x) => (
                  <ProductCard key={x._id} categoryData={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
