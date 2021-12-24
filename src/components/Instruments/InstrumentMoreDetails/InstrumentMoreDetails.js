import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useCartContext } from "../../../contexts/CartContext";
import { Button } from "react-bootstrap";
import * as instrumentsService from "../../../services/instrumentsService";
import DeleteModal from "../../Common/Modals/DeleteModal/DeleteModal";
import ConfirmModal from "../../Common/Modals/ConfirmModal/ConfirmModal";
import "./InstrumentMoreDetails.css";

const InstrumentMoreDetails = () => {
  const navigate = useNavigate();
  const { instrumentId } = useParams();
  const { user } = useAuthContext();
  const { cart, addToCart } = useCartContext();
  const [instrumentData, setInstrumentData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const isOwner =
    user && user.accessToken && user._id === instrumentData._ownerId;

  useEffect(() => {
    instrumentsService.getOne(instrumentId).then((instrumentData) => {
      setInstrumentData(instrumentData);
    });
  }, []);

  const deleteConfirmationHandler = (e) => {
    setShowDeleteModal(true);
  };

  const closeHandler = () => {
    setShowDeleteModal(false);
  };

  const deleteHandler = () => {
    setShowDeleteModal(false);

    instrumentsService
      .destroy(instrumentData._id, user.accessToken)
      .then(() => {
        navigate("/instruments");
      })
      .finally(() => {
        //setShowDeleteDialog(false);
      });
  };

  const closeConfirmHandler = () => {
    setShowConfirmModal(false);
  };

  const continueConfirmationHandler = (e) => {
    setShowConfirmModal(false);
    console.log(cart)
    addToCart(instrumentData);
  };

  return (
    <>
      <div className="backgro_mh">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heding">
                <h2>Instrument Details</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="upcoming" className="upcoming">
        <div className="container-fluid padding_left3">
          <div className="row display_boxflex">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <div className="box_text">
                <div className="titlepage">
                  <h2>Brand: {instrumentData.brandName}</h2>
                  <h3>Model: {instrumentData.modelName}</h3>
                  <h3>Instrument Category: {instrumentData.categoryName}</h3>
                  <h3>Category Type: {instrumentData.categoryType}</h3>
                </div>
                <p>{instrumentData.description}</p>
                <div className="row more-info-button-wrapper">
                  {isOwner ? (
                    <Link
                      to={`/update/${instrumentData._id}`}
                      state={instrumentData}
                    >
                      Update Data
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                {isOwner ? (
                  <Button
                    className="category-delete-button"
                    variant="danger"
                    onClick={deleteConfirmationHandler}
                  >
                    Delete Data
                  </Button>
                ) : (
                  ""
                )}

                {!isOwner ? (
                  <Button
                    className="success buy-btn"
                    onClick={() => setShowConfirmModal(true)}
                  >
                    Buy Instrument
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 border_right">
              <div className="upcomimg">
                <figure>
                  <img src={instrumentData.imageUrl} alt="Instrument Image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <DeleteModal
          showModal={showDeleteModal}
          closeHandler={closeHandler}
          deleteHandler={deleteHandler}
        />
      )}

      {showConfirmModal && (
        <ConfirmModal
          showModal={showConfirmModal}
          closeConfirmHandler={closeConfirmHandler}
          continueConfirmationHandler={continueConfirmationHandler}
        />
      )}
    </>
  );
};

export default InstrumentMoreDetails;
