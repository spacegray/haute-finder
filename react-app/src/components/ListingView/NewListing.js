import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { createListing } from "../../store/listings";
import { useHistory } from "react-router-dom";
// import errorListItems from "./ErorrHandler";
// import {errorList} from "./ErorrHandler";

import "./listingView.css";

Modal.setAppElement("#root");

function NewListingModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  


  useEffect(() => {
    // setValidationErrors([]);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const new_listing = { name, description, imageURL, price }
    const [...errors] = validate();

    if (errors.length > 0) {
      setValidationErrors(errors);
      console.log('ERROR TEST',validationErrors);
      //this console log is empty unless you click submit a second time
    } else {
      setValidationErrors([]);
      const added = await dispatch(createListing(new_listing));
      setModalOpen(false);
      history.push('/listings')
      console.log('AWAIT TEST',added);
      // the entry is added to db, but this console log is empty
      if (added) {
        setName("");
        setDescription("");
        setImageURL("");
        setPrice("");
        setModalOpen(false);
        history.push(`/listings/${added.id}`);
      }
    }
  };
  const validate = () => {
    const validationErrors = [];
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    let isURL = imageURL.match(regex);

    if (name.length < 1) {
      validationErrors.push("A listing Name is required");
    }
    if (description.length < 2) {
      validationErrors.push("A description is required" );
    }
    if (description.length > 2999) {
      validationErrors.push("Description is too long");
    }
    if (!isURL) {
      validationErrors.push("An image URL is required for listings");
    }
    if (price === '') {
      validationErrors.push("Price is required");
    }
    if (isNaN(price)) {
      validationErrors.push("Price must be an integer");
    }
    return validationErrors;
  };

  // const validate = () => {
  //   const validationErrors = [];
  //   if (name.length < 1) {
  //     validationErrors.push({ id: "1", content: "A listing Name is required" });
  //   }
  //   if (description.length < 2) {
  //     validationErrors.push({ id: "2", content: "A description is required" });
  //   }
  //   if (description.length > 2999) {
  //     validationErrors.push({ id: "3", content: "Description is too long" });
  //   }
  //   if (!imageURL) {
  //     validationErrors.push({
  //       id: "4",
  //       content: "An image URL is required for listings",
  //     });
  //   }
  //   if (price === "") {
  //     validationErrors.push({ id: "5", content: "Price is required" });
  //   }
  //   if (isNaN(price)) {
  //     validationErrors.push({ id: "6", content: "Price must be an integer" });
  //   }
  //   return validationErrors;
  // };

  const cancelListingHandler = (e) => {
    e.preventDefault();
    setValidationErrors([]);
    setName("");
    setDescription("");
    setImageURL("");
    setPrice("");
    setModalOpen(false);
    // setShowCreateListing(false);
  };

  return (
    <>
      {/* <errorList errors={errors} /> */}
      {/* {validationErrors.length > 0 && (
        <div className="errors">
          <p className="error-title"> The following errors were found: </p>
          <ul className="error-list">
            {validationErrors.map((error) => (
              <li className="error-list" key={error}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )} */}
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
              <div className="errors-container">
                {/* {validationErrors.map((error, ind) => {
                  <div key={ind}>{error}</div>;
                })} */}
                {validationErrors.length > 0 && (
                  <div className="errors-listing-form-modal">
                    <h3 className="error-title">
                      {" "}
                      The following errors were found:{" "}
                    </h3>
                    <ol className="error-list">
                      {validationErrors.map((error) => (
                        <li key={`errorValidation${error}`}>
                          {" "}
                          {error}{" "}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
              <form onSubmit={handleSubmit} className="create-listing-form">
                <label htmlFor="name"> Item Name </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Give your Listing a name"
                  // required
                />
                <label htmlFor="description"> Description </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your item"
                  // required
                />
                <label htmlFor="imageURL"> Item Image </label>
                <input
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  placeholder="Enter a URL to upload your image"
                  // required
                />
                <label htmlFor="price"> Price </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter a price"
                  // required
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
