import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import * as categoriesService from "../../../services/categoriesService";

const InstrumentMoreDetails = () => {
  const { instrumentId } = useParams();
  const [instrumentData, setInstrumentData] = useState({});
  const location = useLocation();
  const isOwner = location.state;

  useEffect(() => {
    categoriesService.getOne(instrumentId).then((instrumentData) => {
      console.log(instrumentData);
      setInstrumentData(instrumentData);
    });
  }, []);

  return (
    <>
      <div className="backgro_mh">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heding">
                <h2>Instrument Details</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="upcoming" className="upcoming">
        <div className="container-fluid padding_left3">
          <div className="row display_boxflex">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <div className="box_text">
                <div className="titlepage">
                  <h2>Brand: {instrumentData.brandName}</h2>
                  <h3>Model: {instrumentData.modelName}</h3>
                  <h3>Instrument Category: {instrumentData.categoryName}</h3>
                  <h3>Category Type: {instrumentData.categoryType}</h3>
                </div>
                <p>{instrumentData.description}</p>
                {isOwner ? (
                  <Link
                    to={`/update/${instrumentData._id}`}
                    state={instrumentData}
                  >
                    Update Data
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 border_right">
              <div className="upcomimg">
                <figure>
                  <img src={instrumentData.imageUrl} alt="Instrument Image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstrumentMoreDetails;
