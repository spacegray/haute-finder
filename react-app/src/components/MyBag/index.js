import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsForBag, deleteCartItem } from "../../store/orders";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router";

import "./orderBag.css";

function MyBag() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;
  // const { userId } = useParams();
  const orderBag = useSelector((state) => state.orders);
  const cartTotal = useSelector((state) => state.total);
  // const history = useHistory();
  // const [order] = useSelector((state) => state.orders?.orderBag.listings);

  const items = orderBag[userId]?.listings;
  console.log("FRONT END", items, orderBag);

  useEffect(() => {
    // console.log(getItemsForBag(userId));
    dispatch(getItemsForBag(userId));
  }, [dispatch, userId]);

  // const emptyBag = (userId) => {
  //   dispatch(emptyCart(userId, userId));
  //   history.push(`/order_bag/user/${userId}`);
  // };

  const deleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId, userId));
  };

  let total = 0;
  orderBag[userId]?.listings.map((item) => {
    return (total += item.price);
  });
  console.log("lasdkfjlsdfkj", total);

  return (
    <div className="order-bag">
      <h2>My Bag</h2>
      <div className="order-totals">
        <h2>Total</h2>
        {orderBag && orderBag[userId]?.listings.length}
        <p>Price:</p>
        {/* {orderBag && orderBag[userId]?.listings.forEach(item => {
          let total;
           total += item.price
          })} */}
        {total} <br></br>
        {/* <button className="empty-bag-btn" onClick={() => emptyBag(userId)}>
          {" "}
          Empty Bag
        </button> */}
      </div>
      <div className="order-bag-items">
        {orderBag &&
          orderBag[userId]?.listings.map((item) => (
            <div className="order-bag-item" key={item?.id}>
              <img src={item.imageURL} alt={item.name} />
              <div className="order-bag-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
              <button
                className="remove-from-bag-btn"
                onClick={() => deleteItem(item?.id)}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyBag;
