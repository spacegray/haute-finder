import React, {  useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListings} from "../../store/listings";
import Modal from "react-modal";
import NewListingModal from "../ListingView/NewListing";
// import session from '../../store/session';
import "./listingsPage.css";

Modal.setAppElement("#root");

function ListingsPage() {
  const listings = useSelector((state) => state.listings);
  const listingObj = Object.values(listings).reverse();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings());
    // dispatch(getUserListing(userId))
  }, [dispatch]);

  if (!listings) {
    return null;
  }

  return (
    <div>
      <div className="listing-page-container">
        <h1>Listings</h1>
        <div className="side-bar">
          <NewListingModal />
        </div>
        <div className="listing-feed-container">
          <div className="display-listings">
            {listingObj.map((listing) => (
              <NavLink
                to={`/listings/${listing.id}`}
                key={`listings${listing.id}`}
              >
                <div
                  className="listing-card"
                  style={{ width: "500px", justifyContent: "center" }}
                >
                  <h2>{listing.name}</h2>
                  <img
                    src={listing.imageURL}
                    alt="item-for-sale"
                    className="listings-page-imgs"
                  ></img>
                  <p>{listing.description}</p>
                  <p>${listing.price}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListingsPage;
