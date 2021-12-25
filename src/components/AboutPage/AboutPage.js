import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./AboutPage.css";

const AboutPage = () => {
  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState("Show More");

  const toggleShowHandler = (e) => {
    e.preventDefault();

    setShow(!show);

    show ? setButtonText("Show More") : setButtonText("Show Less");
  };

  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row display_boxflex">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-box">
              <h2>About Us</h2>
              <p className="about-us-text">
                Here you can sell your instruments or write amazing story to
                share Musical experience with other musicians. Our music stores
                range from full-line stores that sell products across all
                musical instrument categories and even pro audio categories, to
                music stores that focus on a subset of those categories (e.g. a
                store that sells acoustic and digital pianos, or a store that
                specializes only in drums and percussion), to highly-specialized
                stores focused on a single product type (e.g. a guitar boutique
                focused on vintage collectible guitars, or a sheet music store).
              </p>
              <CSSTransition
                in={show}
                timeout={250}
                classNames="alert"
                unmountOnExit
              >
                <p className="about-us-text">
                  In the United States and Canada, another common distinction
                  exists between “Band & Orchestra” stores that cater to the
                  needs of school music programs and their students, versus
                  “Combo” stores that focus on instruments and equipment used by
                  a rock band. Music stores arose to service the needs of the
                  local community. This included not only individual amateur
                  musicians, but schools from elementary to college level, civic
                  bands and orchestras, churches, and entertainment ensembles
                  that performed at events of the community and its
                  organizations. In service of this diverse clientele, store
                  owners might focus on some specialty or niche market (pianos,
                  sheet music, percussion). Instruments might be purchased
                  outright, leased or rented. Specific or non-stock items could
                  be ordered through the store. More commonly, music stores
                  offered some variety, depending upon the tastes and resources
                  of the owners and the desires of their clientele (whether
                  actual or sought-after). This might include some mixture of
                  fretted instruments (electric guitars, acoustic guitars,
                  mandolins, ukuleles); brass, woodwind, and violin-family
                  instruments; drums and percussion; pianos and organs;
                  consumable items (strings, reeds, drum sticks); accessories
                  (metronomes, music stands); and sheet music.
                </p>
              </CSSTransition>

              <a
                href=""
                className="toggle-button-about"
                onClick={toggleShowHandler}
              >
                {buttonText}
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-box">
              <figure className="image-figure">
                <img
                  src="https://docs.google.com/uc?export=download&id=1PXYlKWCYf_GIrCuCotGZFUxH5O_373s2"
                  alt="Music store"
                />
              </figure>

              <CSSTransition
                in={show}
                timeout={250}
                classNames="alert"
                unmountOnExit
              >
                <figure className="image-figure">
                  <img
                    src="https://docs.google.com/uc?export=download&id=1YrgXheDx-dpxzWqQA7LyAox-5L0b-Jis"
                    alt="Wall with guitars"
                  />
                </figure>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
