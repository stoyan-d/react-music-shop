import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import {
  useNotificationContext,
  types,
} from "../../../contexts/NotificationContext";
import * as instrumentsService from "../../../services/instrumentsService";

import "./AddNewInstrument.css";

const AddNewInstrument = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();
  const { user } = useAuthContext();

  const addCategoryHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const {
      categoryName,
      categoryType,
      brandName,
      modelName,
      imageUrl,
      description,
      price
    } = Object.fromEntries(form);

    const requestData = {
      categoryName,
      categoryType,
      brandName,
      modelName,
      imageUrl,
      description,
      price,
    };

    instrumentsService.create(requestData, user.accessToken).then((response) => {
      if (response._id) {
        addNotification(
          "You added the instrument successfully",
          types.success,
          "Instrument added successfully"
        );
        setTimeout(() => {
          navigate(`/instruments`);
        }, 1500);
      }
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
                  <h2>Add Instrument</h2>
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Category Name"
                    type="text"
                    name="categoryName"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Category Type"
                    type="text"
                    name="categoryType"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Brand Name"
                    type="text"
                    name="brandName"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Model"
                    type="text"
                    name="modelName"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Image Url"
                    type="text"
                    name="imageUrl"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="textarea"
                    placeholder="Description"
                    type="text"
                    name="description"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Price"
                    type="number"
                    name="price"
                    required
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="send">
                    Add Instrument
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewInstrument;
