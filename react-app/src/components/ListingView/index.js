import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-modal';
import { getListings, createListing } from "../../store/listings";
import NewListingModal from './NewListing'

import "./listingView.css";

Modal.setAppElement('#root');

function ListingView() {
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [imageURL, setImageURL] = useState('');
    // const [price, setPrice] = useState('');
    // const [image, setImage] = useState('');
    const [modalOpen, setModalOpen] = useState('');
    const [listing, setListing] = useState('');
    const [listingId, setListingId] = useState('');
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState("");
    const { id, userId} = useParams();
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
    }

    useEffect(() => {
        dispatch(getListings(id));    
    }, [dispatch, id]);

    console.log(item)
    console.log("test est test",user)

  return (
    <div>
      <h1>Listing View</h1>
      <NewListingModal />


      <div className="create-listing-view">
        </div>

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
