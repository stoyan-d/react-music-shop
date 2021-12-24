import "./CartItem.css"

const CartItem = ({cartItemData}) => {
    return (
        <div className="container-fluid padding_left3">
          <div className="row display_boxflex">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 cart-item">
                <div className="cart-item-image-container">
                    <img src={cartItemData.imageUrl} />
                </div>
                <div className="cart-item-instrument-data">
                    <h3>
                        {cartItemData.brandName}
                    </h3>
                    <h5>
                        {cartItemData.modelName}
                    </h5>
                </div>
                <div className="cart-item-price">
                    <p className="cart-item-price-box">
                    {cartItemData.price} BGN
                    </p>
                </div>
            </div>
          </div>
        </div>
    );
};

export default CartItem;