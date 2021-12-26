import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as purchasesService from "../../services/purchasesService";
import PurchaseCard from "./PurchaseCard";
import "./MyProfile.css";

const MyProfile = () => {
  const { user } = useAuthContext();
  const [userPurchases, setUserPurchases] = useState([]);

  useEffect(() => {
    purchasesService.getPurchases(user._id).then((purchases) => {
      setUserPurchases(purchases);
    });
  }, []);

  return (
    <>
      <div className="backgro_mh">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heding">
                <h2>Welcome to your profile {user.email}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming profile-purchases">
        {userPurchases.length && <h4 className="text-center">Your Purchases:</h4>}
        {userPurchases.length ? (
          userPurchases.map((puchaseItem) => (
            <PurchaseCard key={puchaseItem._id} purchaseData={puchaseItem} />
          ))
        ) : (
          <>
            <h4 className="no-items-added-text text-center">
              No purchases made up to this moment
            </h4>
          </>
        )}
      </div>
    </>
  );
};

export default MyProfile;
