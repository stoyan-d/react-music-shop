import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import * as categoriesService from "../../../services/categoriesService";

import "./AddNewCategory.css";

const AddNewCategory = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const addCategoryHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const { categoryName, categoryType, categoryImageUrl, categoryDescription } = Object.fromEntries(form);

    const requestData = {
      categoryName,
      categoryType,
      categoryImageUrl,
      categoryDescription
    }

    categoriesService.create(requestData, user.accessToken).then((authData) => {
      navigate("/categories");
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="contact_bg" onSubmit={addCategoryHandler}>
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Add Category</h2>
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Category Name"
                    type="text"
                    name="categoryName"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Category Type"
                    type="text"
                    name="categoryType"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Image Url"
                    type="text"
                    name="categoryImageUrl"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="textarea"
                    placeholder="Description"
                    type="text"
                    name="categoryDescription"
                  ></textarea>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="send">Add</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
