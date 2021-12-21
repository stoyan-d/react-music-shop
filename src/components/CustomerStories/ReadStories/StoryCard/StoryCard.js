import { Link } from "react-router-dom";
import "./StoryCard.css";

const StoryCard = ({ storyData }) => {
  return (
    <div className="row display_boxflex story-wrapper-box">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="box_text story-box">
          <h3>{storyData.topic}</h3>
          <div
            className="fr-view story-tell-box"
            dangerouslySetInnerHTML={{ __html: storyData.story }}
          />
          <div className="button-container">
            <Link to={`/stories/story-details/${storyData._id}`} state={{storyData}}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
