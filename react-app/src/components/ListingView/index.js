import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneListing, addListing, editListing} from '../../store/listings';


import './listingView'

function ListingView({ListingPage}) {
    const [listingContent, setListingContent] = useState([]);
    const { userId } = useParams();
    const listings = useSelector(state => state.listings);
    const listing = Object.values(listings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllListings())
        // dispatch(getUserListing(userId))
    }, [dispatch]);

    return (
        <div>
            <h1>Listing View</h1>
            <h2>{listing.title}</h2>
            <h3>{listing.description}</h3>
            <h4>{listing.price}</h4>
            </div>
   )
}