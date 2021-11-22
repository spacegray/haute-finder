import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListings, createListing } from "../../store/listings";
import Modal from "react-modal";
import NewListingModal from "../ListingView/NewListing";
// import session from '../../store/session';
import "./listingsPage.css";

Modal.setAppElement("#root");

function ListingsPage() {
  // const [listingContent, setListingContent] = useState([]);
  // const { userId } = useParams();
  const listings = useSelector((state) => state.listings);
  const listingObj = Object.values(listings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings());
    // dispatch(getUserListing(userId))
  }, [dispatch]);

  if (!listings) {
    return null;
  }

  console.log("Test from Listing feed", listingObj);
  console.log("Test 2 from Listing feed", listings);
  return (
    <div>
      <div className="listing-page container">
        <h1>Listings</h1>
        <div className="side-bar">
          <NewListingModal />
        </div>
        <div className="display-listings">
          {listingObj.map((listing) => {
            return (
              <NavLink to={`/listings/${listing.id}`} key={listing.id}>
                <div
                  className="listing-card"
                  style={{ width: "500px", justifyContent: "center" }}
                >
                  <h3>{listing.title}</h3>
                  <img src={listing.imageURL} alt="item-for-sale"></img>
                  <p>{listing.description}</p>
                  <p>${listing.price}</p>
                </div>
              </NavLink>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}
export default ListingsPage;
