import { Button } from "react-bootstrap";
import { useAuthContext } from "../../../../../../contexts/AuthContext";
import * as commentsService from "../../../../../../services/commentsService";
import "./Comment.css";

const Comment = ({ commentData, commentId, getStoryComments, isOwner }) => {
  const { user } = useAuthContext();

  const deleteCommentHandler = () => {
    commentsService
      .deleteComment(commentId, user.accessToken)
      .then((response) => {
        if (response._deletedOn) {
          getStoryComments();
        }
      });
  };

  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 border_right">
      <div className="comment-box">
        <h6>Commented by: {commentData.username}</h6>
        <p className="comment-text">Comment: {commentData.comment}</p>
        <div className="delete-comment-box">
          {isOwner && (
            <Button
              className="danger delete-comment-btn"
              variant="danger"
              onClick={deleteCommentHandler}
            >
              Delete comment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
