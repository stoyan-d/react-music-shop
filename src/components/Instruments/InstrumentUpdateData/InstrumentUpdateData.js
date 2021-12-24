import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import * as categoriesService from "../../../services/instrumentsService";

const InstrumentUpdateData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { instrumentId } = useParams();
  const { user } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const fillData = location.state;

  const updateInstrumentDataHandler = (e) => {
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
      price
    };

    categoriesService.update(requestData, instrumentId, user.accessToken).then((response) => {
        if (response._id) {
            addNotification(
                "You updated the instrument data successfully",
                types.success,
                "Update successful"
              );
              setTimeout(() => {
                navigate(`/details/${instrumentId}`);
              }, 1500);
        }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="contact_bg" onSubmit={updateInstrumentDataHandler}>
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Update Instrument Data</h2>
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Category Name"
                    type="text"
                    name="categoryName"
                    defaultValue={fillData.categoryName}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Category Type"
                    type="text"
                    name="categoryType"
                    defaultValue={fillData.categoryType}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Brand Name"
                    type="text"
                    name="brandName"
                    defaultValue={fillData.brandName}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Model"
                    type="text"
                    name="modelName"
                    defaultValue={fillData.modelName}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Image Url"
                    type="text"
                    name="imageUrl"
                    defaultValue={fillData.imageUrl}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="textarea"
                    placeholder="Description"
                    type="text"
                    name="description"
                    defaultValue={fillData.description}
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Instrument Price"
                    type="number"
                    name="price"
                    defaultValue={fillData.price}
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="send">
                    Update
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

export default InstrumentUpdateData;
