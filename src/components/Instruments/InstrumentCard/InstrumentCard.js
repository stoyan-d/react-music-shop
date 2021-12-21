import { Link } from "react-router-dom";
import "./InstrumentCard.css";

const InstrumentCard = ({ instrumentData }) => {
  return (
    <>
      <div
        className="col-xl-3 col-lg-3 col-md-3 col-sm-6 margi_bott product-card"
        style={{
          backgroundImage: "url(" + instrumentData.imageUrl + ")",
        }}
      >
        <div className="product-info-box">
          <h3>Brand: {instrumentData.brandName}</h3>
          <h3>Model: {instrumentData.modelName}</h3>
          <p>Description: {instrumentData.description}</p>
        </div>
        <div className="hover_box">
          <ul className="icon_hu">
            <Link to={`/details/${instrumentData._id}`} className="details-button">See More Details</Link>
          </ul>
        </div>
        
      </div>

    </>
  );
};

export default InstrumentCard;
