import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row display_boxflex">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-box">
              <h2>About Us</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look
              </p>
              <a href="Javascript:void(0)">Read More</a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-box">
              <figure>
                <img src="images/about.png" alt="#" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
