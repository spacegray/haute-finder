import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { getListings, removeListing, editListing } from "../../store/listings";
import { addCartItem, getItemsForBag } from "../../store/orders";
import NewListingModal from "./NewListing";

import "./listingVue.css";

Modal.setAppElement("#root");

function ListingView() {
  const [modalOpen, setModalOpen] = useState(false);

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
  const item = useSelector((state) => state.listings[id]);
  const order = useSelector((state) => state.orders[userId]?.listings);

  const orderBag = useSelector((state) => state.orders);
  let quantity = 0;
  orderBag &&
    orderBag[userId]?.listings?.forEach((item) => {
      return (quantity += 1);
    });

  useEffect(() => {
    dispatch(getItemsForBag(userId));
  }, [dispatch, userId]);

  const deleteItem = async () => {
    dispatch(removeListing(item?.id));
    history.push(`/listings`);
  };

  const addItem = async () => {
    const filtered = order?.filter((listItem) => listItem.id === item?.id);
    if (filtered?.length < 1 || filtered === undefined) {
      await dispatch(addCartItem(item.id));
      dispatch(getItemsForBag(userId));

      window.alert("Your item has been added");
      // history.push(`/listings`);
    } else {
      window.alert("You already have this item in your cart");
    }
  };

  const canShop = () => {
    if (!sessionUser) {
      window.alert("You must be logged in to shop");
    } else {
      addItem()
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    // const edited_listing = ( name, description, imageURL, price, id );
    const [...errors] = validate();

    if (errors.length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors([]);
      await dispatch(editListing(name, description, imageURL, price, id));

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

    if (imageURL.length > 0 && !isURL) {
      validationErrors.push("An image URL is required for listings");
    }
    if (price.length > 0 && isNaN(price)) {
      validationErrors.push("Price must be an integer");
    }
    return validationErrors;
  };

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
    <div className="listing-view">
      <div className="heading">
        <h1>{item?.name}</h1>
      </div>
      <div className="listing-page-container">
        <div className="side-bar">
          <NewListingModal />
          <div className="add-btn">
            <button className="add-to-bag-btn" onClick={() => canShop()}>
              {" "}
              ADD TO BAG{" "}
            </button>
          </div>
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
          <div
            className="modal-background"
            onRequestClose={() => setModalOpen(false)}
          ></div>
          <Modal
            className="site-modal"
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            shouldCloseOnOverlayClick={true}
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
                        The following errors were found:
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
        <div className="listing-details">
          <div className="listing-view-container">
            <img src={item?.imageURL} alt="item-for-sale"></img>
            <div className="listing-view-info">
              {item?.description}
              <div className="price-section">Price: ${item?.price}</div>
            </div>
            <div className="listing-seller">
            <div className="seller-info">
              <div className="seller-name">
                {/* <h3> Seller: {item?.user.username} </h3> */}
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="right-bar"></div>
      </div>

      <div className="bottom-bar"></div>
    </div>
  );
}

export default ListingView;
