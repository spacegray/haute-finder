const ADD_TO_BAG = 'order/ADD_TO_BAG';
const GET_ITEMS_IN_BAG = 'order/GET_ITEMS_IN_BAG';
const REMOVE_FROM_BAG = 'order/REMOVE_FROM_BAG';
const DELETE_BAG = 'order/DELETE_BAG';

const getItemsInOrder = (items, userId) => ({
    type: GET_ITEMS_IN_BAG,
    items, userId
});

const addToBag = (item) => ({
    type: ADD_TO_BAG,
    item
})

const emptyBag = () => ({
    type: DELETE_BAG,
})

const removeItem = (id) => ({
    type: REMOVE_FROM_BAG,
    id
})

// export const getItemsForBag = () => async (dispatch) => {
//     const response = await fetch(`api/orders/${id}`)

//     if (response.ok) {
//         const data = await response.json()
//         dispatch(getItemsInOrder(data))
//     }
// }

const ordersReducer = (state = {}, action) =>{
    let newState = {...state}
    switch (action.type) {
        case GET_ITEMS_IN_BAG:
            return action.items
        default:
            return state;
    }

}
export default ordersReducer;