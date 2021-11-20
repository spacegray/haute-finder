import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneListing, addListing, editListing } from "../../store/listings";

// import "./listingView";

function ListingView() {
  const [listingContent, setListingContent] = useState();
  const { id } = useParams();
  const listingId = Number(id);
  const listings = useSelector((state) => state.listings);
  const listingObj = Object.values(listings);
  const dispatch = useDispatch();
  // if state is empty, trigger the dispatch

    useEffect(() => {
        if (!listingObj.length) {
            (async () => {
              const item = await dispatch(getOneListing(listingId));
              setListingContent(item);
              // dispatch(getUserListing(userId))
              console.log('TEST 3',listingContent);
            })();
        } else {
        // if not empty, then grab it from the state
        const item = listings.listingId;
        setListingContent(item);
        console.log("TEST 4", listingContent, listingId);
        }
    }, [getOneListing, addListing, editListing, dispatch]);
    console.log(typeof listingId)

  return (
    <div>
      <h1>Listing View</h1>
      {console.log("TEST 5", listingContent,listingId)}
      {/* <h2>{listingContent.item}</h2>
      <h3>{listing.description}</h3>
      <h4>{listing.price}</h4> */}
    </div>
  );
}
export default ListingView;
