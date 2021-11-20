// const listingReducer = (state = {}, action) => {
//     let newState;
//     switch (action.type) {
//       case GET_LISTING:
//             newState = { ...state };
//             action.listings['listings'].forEach((listing) => {
//                 newState[listing.id] = listing;
//               // console.log('Test from Reducer', listing)
//             });
//             return newState;

//         case ADD_LISTING:
//               newState = { ...state };
//               newState[action.listings['id']] = action.listing;
//               return newState;

//         case UPDATE_LISTING:
//               newState = { ...state };
//               newState[action.listing['id']] = action.listing;
//               return newState;
//         case DELETE_LISTING:
//               newState = { ...state };
//               delete newState[action.listing.id];
//               return newState;

//         default:
//           return state;
//     }
// }
