import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { createListing } from "../../store/listings";
import {useHistory} from "react-router-dom";
// import { Redirect } from "react-router";
import "./listingView.css";

Modal.setAppElement("#root");

function NewListingModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showCreateListing, setShowCreateListing] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // const listings = useSelector((state) => state.listings);
  // const listingObj = Object.values(listings);
  // const user = useSelector((state) => state.session.user);
  // const item = useSelector((state) => state.listings[id]);
    
  const handleSubmit = (e, id) => {
    e.preventDefault();
    setName("");
    setDescription("");
    setImageURL("");
    setPrice("");
    setModalOpen(false);
    dispatch(createListing(name, description, imageURL, price));
    history.push(`/listings/`);
    
  }

      // const createListing = async (listing) => {
      //   dispatch(createListing(listing.id));
      //   history.push(`/listings${id}`);
      // };
  // const handleSubmit = async (e, error = false) => {
  //   e.preventDefault();
  //   setErrors([]);
  //     const errors = [];
  //     if (name.length < 1) {
  //       errors.push("Name is required");
  //     }
  //     if (name.length > 50) {
  //       error = true;
  //       setErrors(prevState => [...prevState, "Name must be less than 50 characters"]);
  //     }
  //     if (description.length < 1) {
  //       error = true;
  //       error=true;
  //       setErrors(prevState => [...prevState, "Description is required"]);
  //     }
  //     if (imageURL.length < 1) {
  //       error=true;
  //       setErrors(prevState => [...prevState, "Image URL is required"]);
  //     }
  //     if (price.length < 1) {
  //       error=true;
  //       setErrors((prevState) => [...prevState, "Price is required"]);
  //     }
  //     if (typeof price != Number) {
  //       error=true;
  //       setErrors((prevState) => [...prevState, "Price must be a number"]);
  //     }

  //     if (!error) {
  //       const data = { name, description, imageURL, price, };
  //       if (data) {
  //         const listingData = await dispatch(createListing(data));
  //         // setShowCreateListing(false)
  //         setModalOpen(false);
  //         if (listingData.errors) {
  //           setErrors(listingData.errors);
  //         }
  //       }
  //      }
  //     }


  const cancelListingHandler = (e) => {
    e.preventDefault();
    setErrors([])
    setName("");
    setDescription("");
    setImageURL("");
    setPrice("");
    setModalOpen(false);
    // setShowCreateListing(false);
  };

  //different way to do this
  // useEffect(() => {
  //   const errors = [];
  //   if (name.length < 1) {
  //     errors.push("Name is required");
  //   }
  //   if (description.length < 1) {
  //     errors.push("Description is required");
  //   }
  //   if (imageURL.length < 1) {
  //     errors.push("Image URL is required");
  //   }
  //   if (price.length < 1) {
  //     errors.push("Price is required");
  //   }
  //   if (typeof price != Number) {
  //     errors.push("Price must be a number")
  //   }
  // }, []);
//  setName("");
//  setDescription("");
//  setImageURL("");
//  setPrice("");
//  dispatch(createListing(name, description, imageURL, price, userId));
//  setModalOpen(false);

return (
  <>
    <div>
      <button className="create-listing-btn" onClick={() => setModalOpen(true)}>
        Create Listing
      </button>
      <Modal
        className="site-modal"
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
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