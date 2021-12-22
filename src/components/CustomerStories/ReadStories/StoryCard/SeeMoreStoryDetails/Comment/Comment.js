import "./Comment.css";

const Comment = ({commentData}) => {
  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 border_right">
      <div className="comment-box">
          <h6>Commented by: {commentData.username}</h6>
          <p className="comment-text">Comment: {commentData.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
