import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from '../../../contexts/AuthContext';
import { Button } from "react-bootstrap";
import * as categoriesService from "../../../services/instrumentsService";
import DeleteModal from "../../Common/Modals/DeleteModal";
import './InstrumentMoreDetails.css';

const InstrumentMoreDetails = () => {
  const navigate = useNavigate();
  const { instrumentId } = useParams();
  const { user } = useAuthContext();
  const [instrumentData, setInstrumentData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isOwner = user && user.accessToken && user._id === instrumentData._ownerId;

  useEffect(() => {
    categoriesService.getOne(instrumentId).then((instrumentData) => {
      console.log(instrumentData);
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

    categoriesService
      .destroy(instrumentData._id, user.accessToken)
      .then(() => {
        navigate("/instruments");
      })
      .finally(() => {
        //setShowDeleteDialog(false);
      });
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
                <div className="row more-info-button-wrapper" >
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
    </>
  );
};

export default InstrumentMoreDetails;
