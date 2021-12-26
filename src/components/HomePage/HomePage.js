import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import BarsLoader from "../Common/BarsLoader/BarsLoader";
import "./HomePage.css";

const carouselPagesData = [
  {
    _id: 1,
    title: "Variaty",
    subtitle: "of musical instruments",
    description:
      "If you are looking for a new instrument or want to sell unnecessary one - you are at the right place",
    imageUrl:
      "https://docs.google.com/uc?export=download&id=11oXJsCdso_wD8ly_1IEs0gD3G2ZCdBNG",
    linkTo: "/instruments",
    buttonLabel: 'Go to the products'
  },
  {
    _id: 2,
    title: "Share",
    subtitle: "Your musical story",
    description:
      "Here you can add your story so the others can read it or just enjoy other people stories",
    imageUrl:
      "https://docs.google.com/uc?export=download&id=1mnsnjIzTyNHYMASwCF_mM7c5QqHaqrmg",
    linkTo: "/stories",
    buttonLabel: 'Go to stories'
  }
];

const HomePage = () => {
  const [carouselPages, setCarouselPages] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setCarouselPages(carouselPagesData);
    
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, [])

  const showLoaderItem = (
    <BarsLoader/>
  );

  const showCarouselItem = (
    <Carousel>
      {carouselPages.map((slide) => (
        <Carousel.Item key={slide._id}>
          <img
            className="d-block w-100"
            src={slide.imageUrl}
            alt="carousel-image"
          />
          <Carousel.Caption>
            <div className="text-bg">
              <span>{slide.title}</span>
              <h1>{slide.subtitle}</h1>
              <p>{slide.description}</p>
              <Link to={slide.linkTo}>{slide.buttonLabel}</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  return (
    <>
    {showLoader ? showLoaderItem : showCarouselItem}
    </>
    
  );
};

export default HomePage;
