const ADD_TO_BAG = "order/ADD_TO_BAG";
const GET_ITEMS_IN_BAG = "order/GET_ITEMS_IN_BAG";
const REMOVE_FROM_BAG = "order/REMOVE_FROM_BAG";
const DELETE_BAG = "order/DELETE_BAG";

const getItemsInOrder = (userId, user) => ({
  type: GET_ITEMS_IN_BAG,
  userId,
  user,
});

const addToBag = (item) => ({
  type: ADD_TO_BAG,
  item,
});

const emptyBag = () => ({
  type: DELETE_BAG,
});

const removeItem = (id) => ({
  type: REMOVE_FROM_BAG,
  id,
});

export const getItemsForBag = (userId) => async (dispatch) => {
  const response = await fetch(`/api/order_bag/user/${userId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getItemsInOrder(data, userId));
    console.log("DATA TEST", data);
  }
};

// Delete item from bag
export const deleteCartItem = (id, userId) => async (dispatch) => {
  const response = await fetch(`/api/order_bag/${id}/delete`, {
    method: "DELETE",
  });
  const cartItem = await response.json();
  dispatch(getItemsInOrder(cartItem, userId));
  return;
};

// Add item to bag
export const addCartItem = (listingId) => async (dispatch) => {
  const response = await fetch(`/api/order_bag/${listingId}/add`, {
    method: "POST",
  });
  const newCartItem = await response.json();
  dispatch(getItemsInOrder(newCartItem));
  return newCartItem;
};

// export const

const ordersReducer = (state = {}, action) => {
  let newState;


  switch (action.type) {
    case GET_ITEMS_IN_BAG:
      newState = { ...state };
      action.userId.user_order_bags.forEach((item) => {
        newState[action.user] = item;
      });

      return newState;

    case REMOVE_FROM_BAG:
      newState = { ...state };
      action.userId.user_order_bags.forEach((item) => {
        if (item.id === action.id) {
          delete newState[item.id];
        }
      });
      return newState;
    case ADD_TO_BAG:
      console.log("STATE ACTION TEST", action);
      newState = { ...state };
      action.userId.user_order_bags.append(action.item);
      newState[action.item.id] = action.item;
      return newState;
    default:
      return state;
  }
};
export default ordersReducer;
