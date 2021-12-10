import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsForBag, deleteCartItem, emptyCart } from "../../store/orders";
import { useHistory } from "react-router-dom";

import "./orderBag.css";

function MyBag() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;
  const orderBag = useSelector((state) => state.orders);
  const history = useHistory();
  // const [order] = useSelector((state) => state.orders?.orderBag.listings);


  useEffect(() => {
    dispatch(getItemsForBag(userId));
  }, [dispatch,userId]);

  const emptyBag = (userId) => {
    dispatch(emptyCart( userId));
    history.push(`/order_bag/user/${userId}`);
  };

  const deleteItem = async (itemId) => {
    await dispatch(deleteCartItem(itemId, userId));
    dispatch(getItemsForBag(userId));
    history.push(`/order_bag/user/${userId}`);
  };

  let total = 0;
  orderBag[userId]?.listings?.map((item) => {
    return (total += item.price);
  });

  
    let quantity = 0;
  orderBag && orderBag[userId]?.listings?.forEach((item) => {
    return (quantity += 1);
  });


  return (
    <div className="order-bag-container">
      <h1> Items In Bag</h1>
      <div className="order-totals">
        <h2>Quantity: </h2> {""}
        <h2>{quantity}</h2>
        <h2>Price:</h2>
        <h2>$ {total} </h2> <br></br>
        <button className="empty-bag-btn" onClick={() => emptyBag(userId)}>
          {" "}
          Empty Bag
        </button>
      </div>
      <div className="order-bag-list">
        <div className="order-bag-items">
          {orderBag &&
            orderBag[userId]?.listings?.map((item) => (
              <div className="order-bag-item" key={item?.id}>
                <img src={item.imageURL} alt={item.name} className="bag-img" />
                <div className="order-bag-item-info">
                  <h3>{item.name}</h3>
                  {/* <p>{item.description}</p> */}
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
    </div>
  );
}

export default MyBag;
