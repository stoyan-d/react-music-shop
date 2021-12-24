import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as categoriesService from "../../services/instrumentsService";
import CategoryCard from "./InstrumentCard";
import "./Instruments.css";

const Instruments = () => {
  const { user } = useAuthContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAll().then((response) => {
      setCategories(response);
    });
  }, []);

  const addingAllowed = user && user.accessToken && user._id;

  const addCategory = (
    <>
      <h2 className="categories-title">or</h2>
      <div className="col-md-12">
        <div className="text-bg">
          <Link to="add-category">Add New One</Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="categories-head-wrapper">
        <h2 className="categories-title">See our current instruments</h2>
        {addingAllowed ? addCategory : ""}
      </div>
      <div className="Gallery">
        <div className="container">
          <div className="row display_boxflex">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {categories.length ? (
                  categories.map((x) => (
                    <CategoryCard key={x._id} instrumentData={x} />
                  ))
                ) : (
                  <>
                    <h4 className="text-center">
                      No instruments available at this moment
                    </h4>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruments;
