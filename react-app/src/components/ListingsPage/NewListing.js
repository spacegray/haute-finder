import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { createListing } from "../../store/listings";

Modal.setAppElement("#root");

function NewListing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const { userId } = useParams();
  const dispatch = useDispatch();
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
       dispatch(createListing(name, description, imageURL, price, userId));
       setModalOpen(false);
     };
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


return (
    <div>

    </div>



    )
}
export default NewListing;