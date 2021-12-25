import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import {
  useNotificationContext,
  types,
} from "../../../contexts/NotificationContext";
import { useCartContext } from "../../../contexts/CartContext";
import * as purchasesService from "../../../services/purchasesService";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { addNotification } = useNotificationContext();

  const checkoutHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const {
      courier,
      methodOfPayment,
      name,
      family,
      phone,
      email,
      streetAndNumber,
      city,
      country,
      postCode,
    } = Object.fromEntries(form);

    const requestData = {
      courier,
      methodOfPayment,
      name,
      family,
      phone,
      email,
      streetAndNumber,
      city,
      country,
      postCode,
    };

    purchasesService
      .makeAPurchase(requestData, user.accessToken)
      .then((response) => {
        if (response._id) {
            console.log(response)
        //   addNotification("", types.success, "Purchase made successfully");
        //   setTimeout(() => {
        //     navigate("/home");
        //   }, 2500);
        }
      });
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <form className="contact_bg" onSubmit={checkoutHandler}>
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h4>Please fill out this form to proceed</h4>
              </div>
              <div className="col-md-12 courier-choose-box">
                <p>Please select your courier:</p>
                <input
                  type="radio"
                  id="delivery-express"
                  name="courier"
                  value="Delivery Express"
                  checked
                />
                <label for="delivery-express">Delivery Express</label>

                <br />

                <input
                  type="radio"
                  id="lightning-shipment"
                  name="courier"
                  value="Lightning shipment"
                />
                <label for="lightning-shipment">Lightning shipment</label>

                <br />

                <input
                  type="radio"
                  id="fast-rocket"
                  name="courier"
                  value="Fast rocket"
                />
                <label for="fast-rocket">Fast rocket</label>

                <br />

                <input type="radio" id="fastly" name="courier" value="Fastly" />
                <label for="fastly">Fastly</label>
              </div>

              <div className="col-md-12 payment-choose-box">
                <p>Please select your method of payment:</p>
                <input
                  type="radio"
                  id="cash"
                  name="methodOfPayment"
                  value="Cash"
                  checked
                />
                <label for="cash">Cash</label>

                <br />
              </div>

              <p>Please enter your personal data: </p>

              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Name *"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Family Name *"
                  type="text"
                  name="family"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Phone *"
                  type="tel"
                  name="phone"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your email *"
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  required
                />
              </div>

              <p>Please enter your delivery data: </p>

              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Street and Number *"
                  type="text"
                  name="streetAndNumber"
                  required
                />
              </div>

              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your City *"
                  type="text"
                  name="city"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Country *"
                  type="text"
                  name="country"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Your Post Code *"
                  type="text"
                  name="postCode"
                  required
                />
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <button className="send confirm-checkout-button">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
