import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-modal';
import { getListings, createListing, removeListing, editListing } from "../../store/listings";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setDescription("");
    setImageURL("");
    setPrice("");

    dispatch(editListing(name, description, imageURL, price, id));
    setModalOpen(false);
    // history.push(`/listings`);
  };
    const cancelListingHandler = (e) => {
      e.preventDefault();
      setErrors([]);
      setName("");
      setDescription("");
      setImageURL("");
      setPrice("");
      setModalOpen(false);
      // setShowCreateListing(false);
    };
    // const editItem = async() => {
    //   dispatch(
        // editListing(

        //   item?.name,
        //   item?.description,
        //   item?.imageURL,
        //   item?.price
        // )
    //   );
    // }
    // const createListing = async(id) => {
    //   dispatch(createListing(listing.id));
    //   history.push(`/listings/${id}`)
    // }

    useEffect(() => {
        dispatch(getListings(id));
        // dispatch(getListings(listingId));

    }, [dispatch, id]);

  return (
    <div>
      <h1>{item?.name}</h1>
      <div className="side-bar">
        <NewListingModal />
        <button className="delete-listing-btn" onClick={deleteItem}>
          {" "}
          Delete Listing
        </button>
        <button className="edit-listing" onClick={() => setModalOpen(true)}>
          Edit Listing
        </button>
        <Modal
          className="site-modal"
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
        >
          <div className="create-listing-modal-content">
            <div className="modal-title">
              <h1> Edit Your Listing </h1>
            </div>
            <div className="create-listing-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Item Name </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={item?.name}
                  
                />
                <label htmlFor="description"> Description </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={item?.description}
               
                />
                <label htmlFor="imageURL"> Item Image </label>
                <input
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  placeholder={item?.imageURL}
                  
                />
                <label htmlFor="price"> Price </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={item?.price}
                  
                />
                <div id="create-listing-btn-div">
                  <button id="submit-listing" type="submit">
                    {" "}
                    Submit Edit {" "}
                  </button>
                  <button
                    id="cancel-listing"
                    onClick={(e) => cancelListingHandler(e)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
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
