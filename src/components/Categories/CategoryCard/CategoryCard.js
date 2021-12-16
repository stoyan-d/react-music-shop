import { useState } from 'react';
import DeleteModal from '../../Common/Modals/DeleteModal';
import { Button } from 'react-bootstrap';
import "./CategoryCard.css";

const CategoryCard = ({ categoryData }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const deleteConfirmationHandler = (e) => {
    console.log('test')
    setShowDeleteModal(true);
  };

  const closeHandler = () => {
    setShowDeleteModal(false);
  };

  const deleteHandler = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div
        className="col-xl-3 col-lg-3 col-md-3 col-sm-6 margi_bott product-card"
        style={{
          backgroundImage: "url(" + categoryData.categoryImageUrl + ")",
        }}
      >
        <div className="product-info-box">
          <h3>Type: {categoryData.categoryName}</h3>
          <h3>Category: {categoryData.categoryType}</h3>
          <p>Description: {categoryData.categoryDescription}</p>
        </div>
        <div className="hover_box">
          <ul className="icon_hu">
            <button className="details-button">See Category Products</button>
          </ul>
        </div>
        <Button className="category-delete-button" variant="danger" onClick={deleteConfirmationHandler}>Delete this category</Button>
      </div>
      
      {showDeleteModal && <DeleteModal showModal={showDeleteModal} closeHandler={closeHandler} deleteHandler={deleteHandler} />}
    </>
  );
};

export default CategoryCard;
