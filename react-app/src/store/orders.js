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
  const response = await fetch(`api/order_bags/${userId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getItemsInOrder(data));
  }
};

const ordersReducer = (state = {}, action) => {
  let newState;
  console.log("STATE TEST 1", action);
  switch (action.type) {
    case GET_ITEMS_IN_BAG:
      console.log("STATE TEST2", action);
      newState = { ...state };
      action.data.data["user_order_bags"].forEach((item) => {
        newState[item.id] = item;
    });
    console.log("STATE TEST3", action);
      return newState;
    default:
      return state;
  }
};
export default ordersReducer;
