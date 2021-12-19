import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import {
  useNotificationContext,
  types,
} from "../../../contexts/NotificationContext";
import FroalaEditor from "froala-editor";
import * as storiesService from "../../../services/storiesService";
import "./ShareYourStory.css";

const ShareYourStory = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const userLoggedIn = user && user.accessToken && user._id;
  const { addNotification } = useNotificationContext();

  useEffect(() => {
    new FroalaEditor("#write-your-story");
  }, []);

  const shareYourStoryHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const { topic, story } = Object.fromEntries(form);

    const requestData = {
      user: user.email,
      topic,
      story,
    };

    storiesService
      .shareAStory(requestData, user.accessToken)
      .then((response) => {
        if (response._id) {
          addNotification(
            "You shared your story successfully",
            types.success,
            "Story shared successfully"
          );
          setTimeout(() => {
            navigate(`/stories/read-stories`);
          }, 1500);
        }
      });
  };

  const storyForm = (
    <form
      className="contact_bg write-story-wrapper"
      onSubmit={shareYourStoryHandler}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Share your story</h2>
          </div>
          <div className="col-md-12">
            <input
              className="contactus"
              placeholder="Story Topic"
              type="text"
              name="topic"
            />
          </div>
          <div className="col-md-12">
            <textarea
              id="write-your-story"
              className="textarea customer-story-text"
              placeholder="Write your story here"
              type="text"
              name="story"
              required
            ></textarea>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 share-button-wrapper">
            <button className="send share-button">Share</button>
          </div>
        </div>
      </div>
    </form>
  );

  const logInToShareStory = (
    <div className="row not-logged-share-wrapper">
      <div className="col-md-12">
        <div>
          <h3>You must be logged in to share your story</h3>
          <Link to="/login">Go to login page</Link>
        </div>
      </div>
    </div>
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {userLoggedIn ? storyForm : logInToShareStory}
        </div>
      </div>
    </div>
  );
};

export default ShareYourStory;
