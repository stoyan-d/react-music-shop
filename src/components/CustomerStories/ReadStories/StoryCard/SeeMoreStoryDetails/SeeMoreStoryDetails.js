import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import {
  useNotificationContext,
  types,
} from "../../../../../contexts/NotificationContext";
import { useAuthContext } from "../../../../../contexts/AuthContext";
import { Button } from "react-bootstrap";
import * as storiesService from "../../../../../services/storiesService";
import * as likesService from "../../../../../services/likeService";
import * as commentsService from "../../../../../services/commentsService";
import DeleteModal from "../../../../Common/Modals/DeleteModal";
import Comment from "./Comment";
import "./SeeMoreStoryDetails.css";

const SeeMoreStoryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();
  const { storyData } = location.state;
  const [isOwner, setIsOwner] = useState(false);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [likeDisabled, setLikeDisabled] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { user } = useAuthContext();
  const { storyId } = useParams();

  useEffect(() => {
    likesService.getStoriesLikes(storyId).then((likes) => {
      setLikes(likes);
    });

    commentsService.getComments(storyId).then((comments) => {
      setComments(comments);
    });

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

  const addCommentHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const { comment } = Object.fromEntries(form);
    console.log("cmd", comment);

    const commentData = {
      username: user.email,
      comment,
    };

    commentsService
      .addComment(user._id, storyId, commentData)
      .then((response) => {
        addNotification(
          "Successfuly commented the story",
          types.success,
          "Comment Added"
        );
      })
      .finally(() => {
        commentsService.getComments(storyId).then((comments) => {
          setComments(comments);
        });
      });

    e.currentTarget = "";
  };

  const addLikeHandler = (e) => {
    if (likes.includes(user._id)) {
      setLikeDisabled(true);
      return;
    }

    e.preventDefault();

    likesService
      .addLike(user._id, storyId)
      .then((likes) => {
        setLikes(likes);

        addNotification(
          "Successfuly liked the story",
          types.info,
          "Liked successfully"
        );
      })
      .finally(() => {
        likesService.getStoriesLikes(storyId).then((likes) => {
          setLikes(likes);
        });
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
                <div
                  className="fr-view"
                  dangerouslySetInnerHTML={{ __html: storyData.story }}
                ></div>
                <div className="row more-info-button-wrapper">
                  {isOwner ? (
                    <Link
                      to={`/stories/update/${storyData._id}`}
                      state={{ storyData }}
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

            {comments.map((comment) => (
              <Comment key={comment._id} commentData={comment.commentData} />
            ))}

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 border_right like-wrapper">
              <Button
                className="like-button"
                variant="info"
                disabled={likeDisabled}
                onClick={addLikeHandler}
              >
                Like Story
              </Button>
              <span className="likes-box">Likes: {likes.length}</span>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 border_right">
              <form className="contact_bg" onSubmit={addCommentHandler}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-12">
                      <textarea
                        className="textarea"
                        placeholder="Comment here..."
                        type="text"
                        name="comment"
                        required
                      ></textarea>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <button className="add-comment-btn send">
                        Add comment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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
