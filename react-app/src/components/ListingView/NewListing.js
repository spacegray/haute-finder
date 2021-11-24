import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import Modal from "react-modal";
import { createListing } from "../../store/listings";
import { useHistory } from "react-router-dom";

import "./listingView.css";

Modal.setAppElement("#root");

function NewListingModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  // const listings = useSelector((state) => state.listings);
  // const listingObj = Object.values(listings);
  // const user = useSelector((state) => state.session.user);
  // const item = useSelector((state) => state.listings[id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setName("");
    setDescription("");
    setImageURL("");
    setPrice("");
    setModalOpen(false);
    dispatch(createListing(name, description, imageURL, price));
    history.push(`/listings/`);
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

  return (
    <>
      <div>
        <button
          className="create-listing-btn"
          onClick={() => setModalOpen(true)}
        >
          Create Listing
        </button>
        <Modal
          className="site-modal"
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          shouldCloseOnOverlayClick={true}
        >
          <div className="create-listing-modal-content">
            <div className="modal-title">
              <h1> Sell Your Stuff </h1>
            </div>
            <div className="create-listing-form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Item Name </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Give your Listing a name"
                  required
                />
                <label htmlFor="description"> Description </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your item"
                  required
                />
                <label htmlFor="imageURL"> Item Image </label>
                <input
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  placeholder="Enter a URL to upload your image"
                  required
                />
                <label htmlFor="price"> Price </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter a price"
                  required
                />
                <div id="create-listing-btn-div">
                  <button id="submit-listing" type="submit">
                    {" "}
                    Create Listing{" "}
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
    </>
  );
}

export default NewListingModal;
