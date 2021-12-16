import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import * as categoriesService from "../../services/categoriesService";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAll().then((response) => {
      setCategories(response);
    });
  }, []);
  return (
    <>
      <div className="categories-head-wrapper">
        <h2 className="categories-title">See our current categories or</h2>
        <div className="col-md-12">
          <div className="text-bg">
            <Link to="add-category">Add New One</Link>
          </div>
        </div>
      </div>
      <div id="gallery" className="Gallery">
        <div className="container">
          <div className="row display_boxflex">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {categories.map((x) => (
                  <CategoryCard key={x._id} categoryData={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
