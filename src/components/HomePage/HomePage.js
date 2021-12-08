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
                      <h1>MUSIC BAND EVER</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look
                      </p>
                      <a href="#">Music & Entertainment</a>{" "}
                      <a href="#">Buy Tickets </a>
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
                      <span>The Best</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look
                      </p>
                      <a href="#">Music & Entertainment</a>
                      <a href="#">Buy Tickets </a>
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
                      <span>The Best</span>
                      <h1>MUSIC BAND EVER</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look
                      </p>
                      <a href="#">Music & Entertainment</a>{" "}
                      <a href="#">Buy Tickets </a>
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
