import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import * as categoriesService from "../../../services/categoriesService";
import DeleteModal from "../../Common/Modals/DeleteModal";
import { Button } from "react-bootstrap";
import "./InstrumentCard.css";

const InstrumentCard = ({ instrumentData }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteConfirmationHandler = (e) => {
    setShowDeleteModal(true);
  };

  const closeHandler = () => {
    setShowDeleteModal(false);
  };

  const deleteHandler = () => {
    setShowDeleteModal(false);

    categoriesService
      .destroy(instrumentData._id, user.accessToken)
      .then(() => {
        navigate("/instruments");
      })
      .finally(() => {
        //setShowDeleteDialog(false);
      });
  };

  const isOwner = user && user.accessToken && user._id === instrumentData._ownerId;

  return (
    <>
      <div
        className="col-xl-3 col-lg-3 col-md-3 col-sm-6 margi_bott product-card"
        style={{
          backgroundImage: "url(" + instrumentData.imageUrl + ")",
        }}
      >
        <div className="product-info-box">
          <h3>Brand: {instrumentData.brandName}</h3>
          <h3>Model: {instrumentData.modelName}</h3>
          <p>Description: {instrumentData.description}</p>
        </div>
        <div className="hover_box">
          <ul className="icon_hu">
            <Link to={`/details/${instrumentData._id}`} state={isOwner} className="details-button">See More Details</Link>
          </ul>
        </div>
        { isOwner ?  (
          <Button
            className="category-delete-button"
            variant="danger"
            onClick={deleteConfirmationHandler}
          >
            Delete
          </Button>
        ) : (
          ""
        )}
      </div>

      {showDeleteModal && (
        <DeleteModal
          showModal={showDeleteModal}
          closeHandler={closeHandler}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
};

export default InstrumentCard;
