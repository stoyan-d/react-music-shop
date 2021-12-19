import { Link } from "react-router-dom";

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
      <div id="upcoming" className="upcoming">
        <div className="container-fluid padding_left3">
          <div className="row display_boxflex">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="box_text">
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
