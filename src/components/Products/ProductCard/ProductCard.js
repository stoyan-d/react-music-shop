import "./ProductCard.css";

const ProductCard = ({
  categoryData
}) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 margi_bott product-card" style={{  
      backgroundImage: "url(" + categoryData.categoryImageUrl + ")",

    }}>
      <div className="product-info-box">
        <h3>Type: {categoryData.categoryName}</h3>
        <h3>Category: {categoryData.categoryType}</h3>
        <p>Description: {categoryData.categoryDescription}</p>
      </div>
      <div className="hover_box">
        <ul className="icon_hu">
          <button className="details-button">
            Go To Category
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
