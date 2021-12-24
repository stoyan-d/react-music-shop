import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import "./ShoppingCard.css";

const ShoppingCart = () => {
  const { cart, clearCart } = useCartContext();
  const [checkoutForm, setCheckoutForm] = useState(false);

  const checkoutHandler = (e) => {
    e.preventDefault();

    setCheckoutForm(true);
  };


  return (
    <>
      <div className="backgro_mh">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heding">
                <h2>Shopping Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming shopping-card-wrapper">
        {cart.length ? (
          cart.map((cartItem) => (
            <CartItem key={cartItem._id} cartItemData={cartItem} />
          ))
        ) : (
          <>
            <h4 className="no-items-added-text text-center">
              No items added to the cart up to this moment
            </h4>
          </>
        )}

        <div className="buttons-wrapper">
            {cart.length ? <Button variant="secondary" onClick={clearCart}>Clear Cart</Button> : ""}
          <Button variant="success" className="info">
            <Link to="/instruments">Continue shopping</Link>
          </Button>
          {cart.length ? <Button className="success" onClick={checkoutHandler}>Checkout</Button> : ""}
        </div>

        {
            checkoutForm ? <Checkout/> : ''
        }
      </div>
    </>
  );
};

export default ShoppingCart;
