import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListings } from "../../store/listings";
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
    <div className="listings-page-container">
      <div className="heading">
      <h1>Listings</h1>
      </div>
      <div className="listings-feed-container">
      <div className="left-side-bar">
        <NewListingModal />
      </div>
      {}
        <div className="display-listings">
          <div className="listings">
            <div className="parent">
              {listingObj.map((listing, index) => (
                <div className={`div${index}`}>
                  <NavLink
                    to={`/listings/${listing.id}`}
                    key={`listings${listing.id}`}
                  >
                    <div
                      className="listing-card"
                      style={{ width: "95%", justifyContent: "center", margin: "10px" }}
                    >
                      <h2>{listing.name}</h2>
                      <img
                        src={listing.imageURL}
                        alt="item-for-sale"
                        className="listings-page-imgs"
                      ></img>
                      {/* <p>{listing.description}</p> */}
                      <p>Price: ${listing.price}</p>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="right-listing-bar">Placeholder for user info</div> */}
    </div>
  );
}
export default ListingsPage;
