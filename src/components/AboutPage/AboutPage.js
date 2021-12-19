import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row display_boxflex">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-box">
              <h2>About Us</h2>
              <p className="about-us-text">
                Music stores range from full-line stores[2] that sell products
                across all musical instrument categories and even pro audio
                categories, to music stores that focus on a subset of those
                categories (e.g. a store that sells acoustic and digital pianos,
                or a store that specializes only in drums and percussion), to
                highly-specialized stores focused on a single product type (e.g.
                a guitar boutique focused on vintage collectible guitars, or a
                {/* sheet music store). In the United States and Canada, another
                common distinction exists between “Band & Orchestra” stores that
                cater to the needs of school music programs and their students,
                versus “Combo” stores that focus on instruments and equipment
                used by a rock band. Music stores arose to service the needs of
                the local community. This included not only individual amateur
                musicians, but schools from elementary to college level, civic
                bands and orchestras, churches, and entertainment ensembles that
                performed at events of the community and its organizations. In
                service of this diverse clientele, store owners might focus on
                some specialty or niche market (pianos, sheet music,
                percussion). Instruments might be purchased outright, leased or
                rented. Specific or non-stock items could be ordered through the
                store. More commonly, music stores offered some variety,
                depending upon the tastes and resources of the owners and the
                desires of their clientele (whether actual or sought-after).
                This might include some mixture of fretted instruments (electric
                guitars, acoustic guitars, mandolins, ukuleles); brass,
                woodwind, and violin-family instruments; drums and percussion;
                pianos and organs; consumable items (strings, reeds, drum
                sticks); accessories (metronomes, music stands); and sheet
                music. */}
              </p>
              <a href="#">Read More About Us</a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="about-box">
              <figure>
                <img
                  src="https://docs.google.com/uc?export=download&id=1PXYlKWCYf_GIrCuCotGZFUxH5O_373s2"
                  alt="About our store page"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
