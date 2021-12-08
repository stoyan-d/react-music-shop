const ProductCard = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 margi_bott product-card">
      <div>
        <h2>Type: </h2>
        <h2>Category: </h2>
        <h2>Model: </h2>
        <h2>Price: </h2>
      </div>
      <div className="Gallery_img">
        <figure>
          <img src="images/Gallery1.jpg" alt="#" />
        </figure>
      </div>
      <div className="hover_box">
        <ul className="icon_hu">
          <button className="details-button">
            Details
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
