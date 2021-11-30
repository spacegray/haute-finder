import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { getListings, removeListing, editListing } from "../../store/listings";
import { addCartItem, getItemsForBag } from "../../store/orders";
import NewListingModal from "./NewListing";

import "./listingView.css";

Modal.setAppElement("#root");

function ListingView() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [listing, setListing] = useState('');
  // const [listingId, setListingId] = useState('');
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [validationErrors, setValidationErrors] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;
  const dispatch = useDispatch();
  // const listings = useSelector((state) => state.listings);
  const item = useSelector((state) => state.listings[id]);
  const order = useSelector((state) => state.orders[userId]?.listings);

    useEffect(() => {
      // console.log(getItemsForBag(userId));
      dispatch(getItemsForBag(userId, sessionUser));
    }, [dispatch, userId]);

  console.log("MY BAG TEST!!@", order, userId);

  const deleteItem = async () => {
    dispatch(removeListing(item?.id));
    history.push(`/listings`);
  };

  const addItem = async () => {
    const filtered = order?.filter((listItem) => listItem.id === item?.id);
    if (filtered?.length < 1 || filtered === undefined) {
      await dispatch(addCartItem(item.id));
     
      window.alert("Your item has been added");
    } else {
      window.alert("You already have this item in your cart");
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    // const edited_listing = ( name, description, imageURL, price, id );
    const [...errors] = validate();

    if (errors.length > 0) {
      setValidationErrors(errors);
    
      //this console log is empty unless you click submit a second time
    } else {
      setValidationErrors([]);
      await dispatch(editListing(name, description, imageURL, price, id));
      // history.push("/listings");
      // console.log("Edit TEST", edited_listing);
      // the entry is added to db, but this console log is empty
      // if (added) {
      setName("");
      setDescription("");
      setImageURL("");
      setPrice("");
      setModalOpen(false);
      history.push(`/listings/${id}`);
    }
  };
  const validate = () => {
    const validationErrors = [];
    const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    let isURL = imageURL.match(regex);

    // if (name.length < 1) {
    //   validationErrors.push("A listing Name is required");
    // }
    // if (description.length < 2) {
    //   validationErrors.push("A description is required");
    // }
    // if (description.length > 2999) {
    //   validationErrors.push("Description is too long");
    // }
    if (imageURL.length > 0 && !isURL) {
      validationErrors.push("An image URL is required for listings");
    }
    // if (price === "") {
    //   validationErrors.push("Price is required");
    // }
    if (price.length > 0 && isNaN(price)) {
      validationErrors.push("Price must be an integer");
    }
    return validationErrors;
  };

  // without error handling
  // const handleEditSubmit = (e) => {
  //   e.preventDefault();
  //   setName("");
  //   setDescription("");
  //   setImageURL("");
  //   setPrice("");

  // dispatch(editListing(name, description, imageURL, price, id));
  // setModalOpen(false);
  // history.push(`/listings/${id}`);
  // };
  const cancelListingHandler = (e) => {
    e.preventDefault();
    setValidationErrors([]);
    setName("");
    setDescription("");
    setImageURL("");
    setPrice("");
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(getListings(id));
    // dispatch(getListings(listingId));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{item?.name}</h1>
      <div className="side-bar">
        <NewListingModal />
        {sessionUser && sessionUser?.id === item?.userId && (
          <>
            <button className="delete-listing-btn" onClick={deleteItem}>
              {" "}
              Delete Listing
            </button>
            <button
              className="edit-listing-btn"
              onClick={() => setModalOpen(true)}
            >
              Edit Listing
            </button>
          </>
        )}
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
                        <li key={`EditErrorValidation${error}`}> {error} </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
              <form onSubmit={handleEditSubmit}>
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
                    Submit Edit{" "}
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
          <div className="price-section">${item?.price}</div>
        </div>
        <button className="add-to-bag-btn" onClick={() => addItem()}>
          {" "}
          ADD TO BAG{" "}
        </button>
      </div>
    </div>
  );
}

export default ListingView;
