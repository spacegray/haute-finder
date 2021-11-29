const ADD_TO_BAG = "order/ADD_TO_BAG";
const GET_ITEMS_IN_BAG = "order/GET_ITEMS_IN_BAG";
const REMOVE_FROM_BAG = "order/REMOVE_FROM_BAG";
const DELETE_BAG = "order/DELETE_BAG";

const getItemsInOrder = (userId) => ({
  type: GET_ITEMS_IN_BAG,
  userId,
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
    dispatch(getItemsInOrder(data));
    console.log("DATA TEST", data);
  }
};

// Delete item from bag
export const deleteCartItem = (id) => async (dispatch) => {
  const response = await fetch(`/api/order_bag/${id}/delete`, {
    method: "DELETE",
  });
  const cartItem = await response.json();
  dispatch(removeItem(cartItem));
  return;
};

// Delete item from bag
export const addCartItem = (id) => async (dispatch) => {
  const response = await fetch(`/api/order_bag/${id}/add`, {
    method: "POST",
  });
  const newCartItem = await response.json();
  dispatch(addToBag(newCartItem));
  return;
};

const ordersReducer = (state = {}, action) => {
  let newState;
  console.log("STATE TEST 1", action);
  switch (action.type) {
    case GET_ITEMS_IN_BAG:
      console.log("STATE TEST2", action);
      newState = { ...state };
      action.userId.user_order_bags.forEach((item) => {
        newState[item.id] = item;
      });
      console.log("STATE TEST3", action);
      return newState;

    case REMOVE_FROM_BAG:
      newState = { ...state };
      action.userId.user_order_bags.forEach((item) => {
        if (item.id === action.id) {
          delete newState[item.id];
        }
      });
    case ADD_TO_BAG:
      newState = { ...state };
      action.item.user_order_bags.forEach((cartItem) => {
        if (cartItem.id === action.id) {
          delete newState[cartItem.id];
        }
      });
    default:
      return state;
  }
};
export default ordersReducer;
