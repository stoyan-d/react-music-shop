import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="slider_section">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg">
                      <span>The Best</span>
                      <h1>MUSICAL INSTRUMENTS</h1>
                      <p>
                        The finest instruments - handmade and handtuned.
                      </p>
                      <Link to="products">Music & Entertainment Products</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="carousel-caption">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg">
                      <span>Amazing Concerts</span>
                      <h1>TICKETS</h1>
                      <p>
                        Reserve and buy tickets for the best shows
                      </p>
                      <Link to="tickets">Tickets</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-bg">
                      <span>Read our customers</span>
                      <h1>Stories</h1>
                      <p>
                        
                      </p>
                      <Link to="share-your-story">Share stories</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
};

export default HomePage;
