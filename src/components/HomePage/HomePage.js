import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import './HomePage.css';

const HomePage = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://docs.google.com/uc?export=download&id=1RvRwJBFAPwd2KfGyOibJKPVYSeT1PYrA"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://docs.google.com/uc?export=download&id=1RvRwJBFAPwd2KfGyOibJKPVYSeT1PYrA"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://docs.google.com/uc?export=download&id=1RvRwJBFAPwd2KfGyOibJKPVYSeT1PYrA"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;
