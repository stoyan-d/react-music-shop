import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./HomePage.css";

const carouselPages = [
  {
    _id: 1,
    title: "Variaty",
    subtitle: "of musical instruments",
    description:
      "If you are looking for a new instrument or want to sell unnecessary one - you are at the right place",
    imageUrl:
      "https://docs.google.com/uc?export=download&id=11oXJsCdso_wD8ly_1IEs0gD3G2ZCdBNG",
    linkTo: "/categories",
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
    linkTo: "/concerts",
    buttonLabel: 'Add your story'
  },
  {
    _id: 3,
    title: "Buy",
    subtitle: "Tickets",
    description:
      "You can see the concerts available in the next monts add purchase a ticket",
    imageUrl:
      "https://docs.google.com/uc?export=download&id=1i24h_Md3XWkwuk_mFn8by2Tmd6rcx0Z-",
      linkTo: "/concerts",
      buttonLabel: 'See available concerts'
  },
];

const HomePage = () => {
  return (
    <Carousel>
      {carouselPages.map((slide) => (
        <Carousel.Item key={slide._id}>
          <img
            className="d-block w-100"
            src={slide.imageUrl}
            alt="carousel-image"
          />
          <Carousel.Caption>
            <div class="text-bg">
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
};

export default HomePage;
