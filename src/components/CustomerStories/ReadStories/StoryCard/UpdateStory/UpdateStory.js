import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import {
    useNotificationContext,
    types,
} from "../../../../../contexts/NotificationContext";
import { useAuthContext } from "../../../../../contexts/AuthContext";
import FroalaEditor from "froala-editor";
import * as storiesService from "../../../../../services/storiesService"

import "./UpdateStory.css";

const UpdateStory = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [storyData, setStoryData] = useState({});
  const { user } = useAuthContext();
  const { storyId } = useParams();
  const userLoggedIn = user && user.accessToken && user._id;
  const { addNotification } = useNotificationContext();
  console.log('location', location)
  useEffect(() => {
    setStoryData(location.state);
    console.log('str', storyData)
    new FroalaEditor("#write-your-story");
  }, []);

  const updateStoryHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const { topic, story } = Object.fromEntries(form);

    const requestData = {
      user: user.email,
      topic,
      story,
    };

    storiesService
    .update(requestData, storyId, user.accessToken)
    .then((response) => {
      if (response._id) {
        addNotification(
          "You updated your story successfully",
          types.success,
          "Story updated successfully"
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
      onSubmit={updateStoryHandler}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Update your story</h2>
          </div>
          <div className="col-md-12">
            <input
              className="contactus"
              placeholder="Story Topic"
              type="text"
              name="topic"
              defaultValue={storyData.topic}
            />
          </div>
          <div className="col-md-12">
            <textarea
              id="write-your-story"
              className="textarea customer-story-text"
              placeholder="Write your story here"
              type="text"
              name="story"
              defaultValue={storyData.story}
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

export default UpdateStory;
