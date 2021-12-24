import { Form } from "react-bootstrap";

const Checkout = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="contact_bg">
          <Form>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-12">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />
              </div>
            ))}
          </Form>
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
                  name="name"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Email"
                  type="text"
                  name="email"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Phone"
                  type="text"
                  name="phone"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="textarea"
                  placeholder="Message"
                  type="text"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <button className="send">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
