import { useEffect, useState } from "react";
import * as storiesService from "../../../services/storiesService";
import StoryCard from "./StoryCard";
import "./ReadStories.css";

const ReadStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    storiesService.getAllStories().then((response) => {
        setStories(response);
    });
  }, []);

  return (
    <>
      <div className="backgro_mh">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heding">
                <h2>Stories</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="upcoming" className="upcoming">
        <div className="container-fluid padding_left3">
          { stories.length ? stories.map(story => <StoryCard key={story._id} storyData={story}/>) : '' }
        </div>
      </div>
    </>
  );
};

export default ReadStories;
