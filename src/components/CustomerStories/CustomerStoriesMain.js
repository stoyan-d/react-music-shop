import { Link } from "react-router-dom";
import './CustomerStoriesMain.css';

const CustomerStoriesMain = () => {
  return (
    <>
      <div className="backgro_mh">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heding">
                <h2>Read a customer story or write your's</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="upcoming" className="upcoming stories-buttons-main-wrapper">
        <div className="container-fluid padding_left3">
          <div className="row display_boxflex">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="box_text story-buttons-wrapper">
                <Link to="/stories/read-stories">Read Another Story</Link>
                <Link to="/stories/share-your-story">Share Your Story</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerStoriesMain;
