import { Link } from "react-router-dom";

const CarouselSlide = ({
    imageUrl
}) => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <div className="carousel-caption">
            <div className="row">
              <div className="col-md-12">
                <div className="text-bg">
                  <span>The Best</span>
                  <h1>Musical Instruments</h1>
                  <p>Best musical instruments</p>
                  <Link to="products">Go to page</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
