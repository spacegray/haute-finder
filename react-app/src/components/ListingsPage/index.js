import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { getAllListings} from '../../store/listings';
// import session from '../../store/session';
import './listingsPage.css'


function ListingsPage() {
    const [listingContent, setListingContent] = useState([]);
    // const { userId } = useParams();
    const listings = useSelector(state => state.listings);
    const listing = Object.values(listings);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllListings())
        // dispatch(getUserListing(userId))
    }, [dispatch]);

    if (!listings) {
        return null;
    }


    return (
      <div>
        <div className="listing-page container">
          <h1>Listings</h1>
          <div
            className="display-listings">
            {listing.map((list) => {
              return (
                <div className="listing-card" key={list.id} style={{width: '500px', justifyContent: 'center'}}>
                  <h3>{list.title}</h3>
                  <img src={list.imageURL}></img>
                  <p>{list.description}</p>
                  <p>${list.price}</p>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    );
}
export default ListingsPage;