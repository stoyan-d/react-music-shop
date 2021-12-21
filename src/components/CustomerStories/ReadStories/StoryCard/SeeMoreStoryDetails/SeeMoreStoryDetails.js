import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation} from "react-router-dom";
import { useAuthContext } from '../../../../../contexts/AuthContext';
import { Button } from "react-bootstrap";
import * as storiesService from "../../../../../services/storiesService";
import DeleteModal from "../../../../Common/Modals/DeleteModal";
import './SeeMoreStoryDetails.css';

const SeeMoreStoryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {storyData} = location.state;
  const [isOwner, setIsOwner] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { user } = useAuthContext();
  const { storyId } = useParams();

  useEffect(() => {
    setIsOwner(user && user.accessToken && user._id === storyData._ownerId);
  }, []);

  const deleteConfirmationHandler = (e) => {
    setShowDeleteModal(true);
  };

  const closeHandler = () => {
    setShowDeleteModal(false);
  };

  const deleteHandler = () => {
    setShowDeleteModal(false);

    storiesService
      .destroy(storyData._id, user.accessToken)
      .then(() => {
        navigate("/stories/read-stories");
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
                <h2>Story Details</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="upcoming" className="upcoming">
        <div className="container-fluid padding_left3">
          <div className="row display_boxflex">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="box_text story-box-text">
                <div className="titlepage">
                  <h2>Topic: {storyData.topic}</h2>
                </div>
                <div className="fr-view" dangerouslySetInnerHTML={{ __html: storyData.story }}></div>
                <div className="row more-info-button-wrapper" >
                {isOwner ? (
                  <Link
                    to={`/stories/update/${storyData._id}`}
                    state={{storyData}}
                  >
                    Update Story
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
                    Delete Story
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 border_right">
              <div className="upcomimg">
                <figure>
                  {/* <img src={storyData.imageUrl} alt="Instrument Image" /> */}
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

export default SeeMoreStoryDetails;
