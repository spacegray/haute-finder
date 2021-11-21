import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllListings, addListing, editListing } from "../../store/listings";

import "./listingView.css";

function ListingView() {
    const dispatch = useDispatch();
    const { id } = useParams();
    //const sessionUser = useSelector((state) => state.session.user);
    const listings = useSelector((state) => state.listings);
    const listingObj = Object.values(listings);
    const item = useSelector((state) => state.listings[id]);
 

    useEffect(() => {
        dispatch(getAllListings(id));
    }, [dispatch, id]);


  return (
    <div>
      <h1>Listing View</h1>
        <div className="listing-view-container">
            {/* {item.map((value) => {
                return (
                    <div className="listing-view-item">
                        <h2>{value.title}</h2>
                        <p>{value.description}</p>
                        <p>{value.price}</p>
                    
                        <p>{value.imageUrl}</p>
                    </div>
                );
            })} */}
        </div>
        
    </div>
  );
}
export default ListingView;
