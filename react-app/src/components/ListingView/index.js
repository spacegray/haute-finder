import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-modal';
import { getListings, createListing, removeListing } from "../../store/listings";
import NewListingModal from './NewListing'

import "./listingView.css";

Modal.setAppElement('#root');

function ListingView() {
    const [modalOpen, setModalOpen] = useState('');
    const [listing, setListing] = useState('');
    const [listingId, setListingId] = useState('');
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState("");
    const { id, userId} = useParams();
    const history = useHistory();
    // const { userId } = useParams();
    //const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const listings = useSelector((state) => state.listings);
    // const listingObj = Object.values(listings);
    const user = useSelector((state) => state.session.user)
    const item = useSelector((state) => state.listings[id]);
    const userListings = Object.values(listings).filter(
    (listing) => listing.userId == userId );

    const onClickSettings = (listing) => {
      dispatch(createListing(listing.id))
      setListingId(listing.id)
      setListing(listingId)
      // dispatch(removeListing(item?.id))
    }

    const deleteItem = async() => {
      dispatch(removeListing(item?.id));
      history.push(`/listings`)
    }

    // const createListing = async(id) => {
    //   dispatch(createListing(listing.id));
    //   history.push(`/listings/${id}`)
    // }



    useEffect(() => {
        dispatch(getListings(id));

    }, [dispatch, id]);



  return (
    <div>
      <h1>{item?.name}</h1>
      <div className="side-bar">
        <NewListingModal />
        <button
          className="delete-listing-btn"
          onClick={deleteItem} 
        >
          {" "}
          Delete Listing
        </button>
      </div>
      <div className="create-listing-view"></div>

      <div className="listing-view-container">
        <img src={item?.imageURL} alt="item-for-sale"></img>
        <div className="listing-view-info">
          {item?.description}
          <div classname="price-section">${item?.price}</div>
        </div>
      </div>
    </div>
  );
}
export default ListingView;
