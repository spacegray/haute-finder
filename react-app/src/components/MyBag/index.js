import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsForBag } from "../../store/orders";
import { useParams } from "react-router";

import "./orderBag.css";

function MyBag() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
    const { userId } = useParams();
  const orderBag = useSelector((state) => state.orders.items);
//   const items = Object.values(orderBag);

  useEffect(() => {
    dispatch(getItemsForBag());
  }, []);
  console.log("USER BAG TEST", orderBag);

  return (
    <div className="order-bag">
      <h2>My Bag</h2>
      {/* <div className="order-bag-items">
        {items.map((item) => (
          <div className="order-bag-item" key={item.id}>
            <img src={item.imageURL} alt={item.name} />
            <div className="order-bag-item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default MyBag;
