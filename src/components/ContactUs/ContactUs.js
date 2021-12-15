import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="contact_bg">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Contact us</h2>
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Your Name"
                    type="text"
                    name="Your Name"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Your Email"
                    type="text"
                    name="Your Email"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Your Phone"
                    type="text"
                    name="Your Phone"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    type="text"
                    name="Message"
                  ></textarea>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button className="send">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="row mapouter">
          <div class="gmap_canvas">
            <iframe
              width="800"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Plovdiv&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 social-media-box">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
              <div className="address">
                <ul className="loca">
                  <li>
                    <a href="#">
                      <img src="icon/loc.png" alt="#" />
                    </a>
                    Locations
                  </li>
                  <li>
                    <a href="#">
                      <img src="icon/call.png" alt="#" />
                    </a>
                    +123123123123
                  </li>
                  <li>
                    <a href="#">
                      <img src="icon/email.png" alt="#" />
                    </a>
                    doNotTryThisEmail@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
              <ul className="social_link">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
