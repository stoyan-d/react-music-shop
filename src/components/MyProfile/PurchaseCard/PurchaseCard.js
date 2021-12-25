import CartItem from "../../ShoppingCart/CartItem";
import "./PurchaseCard.css";

const PurchaseCard = ({ purchaseData }) => {
  return (
    <div className="container-fluid padding_left3 order">
      <div className="row display_boxflex">
        <h2>Order ID: {purchaseData._id}</h2>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="deliver-to-box">
            <h5>
              Deliver to: {purchaseData.name} {purchaseData.family}
            </h5>
          </div>
          <div className="email-box">
            <h5>Email: {purchaseData.email}</h5>
          </div>
          <div className="phone-number-box">
            <h5>Phone: {purchaseData.phone}</h5>
          </div>
          <div className="address-box">
            <h5>
              Address: {purchaseData.country}, {purchaseData.city},
              {purchaseData.postCode}, {purchaseData.streetAndNumber}
            </h5>
          </div>
          <div className="purchase-item">
            <h5>Items to deliver:</h5>
            {purchaseData.purchases &&
              purchaseData.purchases.map((purchase) => (
                <CartItem key={purchase._id} cartItemData={purchase} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
