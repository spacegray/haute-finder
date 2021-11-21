import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListings, getOneListing, addListing, editListing } from "../../store/listings";

import "./listingView.css";

function ListingView() {
    const dispatch = useDispatch();
    const { id } = useParams();
    //const sessionUser = useSelector((state) => state.session.user);
    const listings = useSelector((state) => state.listings);
    const listingObj = Object.values(listings);
    const item = useSelector((state) => state.listings[id]);
 

    useEffect(() => {
        dispatch(getListings(id));
    }, [dispatch, id]);

    console.log(item)

  return (
    <div>
      <h1>Listing View</h1>
      <div className="listing-view-container">
        <img src={item?.imageURL} alt="item-for-sale"></img>
        <div className="listing-view-info">
          {item?.description}
          ${item?.price}
        </div>
      </div>
    </div>
  );
}
export default ListingView;
