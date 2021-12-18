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
                <Link to="test">Read Another Story</Link>
                <Link to="test">Share Your Story</Link>
              </div>
            </div>

            {/* <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 border_right">
              <div className="upcomimg">
                <figure>
                  <img src="images/up.jpg" alt="#" />
                </figure>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerStoriesMain;
