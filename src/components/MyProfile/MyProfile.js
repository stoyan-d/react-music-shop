import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as purchasesService from "../../services/purchasesService";

const MyProfile = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    purchasesService.getPurchases(user._id).then((purchases) => {
        console.log('purchases', purchases)
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
      <div className="upcoming"></div>
    </>
  );
};

export default MyProfile;
