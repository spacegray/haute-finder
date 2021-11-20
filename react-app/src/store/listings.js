const GET_LISTING = "listing/GET_LISTING";
const ADD_LISTING = "listing/ADD_LISTING";
// const UPDATE_LISTING = "listing/UPDATE_LISTING";
// const REMOVE_LISTING = "listing/REMOVE_LISTING";

// actions
const getListings = (listings) => ({
    type: GET_LISTING,
    listings
});

// const getOneListing = (userId) => ({
//     type: GET_LISTING,
//     userId
// })

// Thunk actions

//GET All Listings
export const getAllListings = () => async (dispatch) => {
    const response = await fetch('/api/listings');
    if (!response.ok) throw response;
    const listings = await response.json();
    console.log('FrontEnd********Testing Listings Get******', listings);
    dispatch(getListings(listings));
}

// GET User Listing
// export const getUserListing = (userId) => async (dispatch) => {
//     const response = await fetch(`/api/listings/user/${userId}/`);
//     const listings = await response.json();
//     dispatch(getOneListing(listings));
// }

const listingReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
      case GET_LISTING:
            newState = { ...state };
            action.listings['listings'].forEach((listing) => {
              newState[listing.id] = listing;
              // console.log('Test from Reducer', listing)
            });
        return newState;
      // case ADD_LISTING:
      //   newState = { ...state };
      //   newState[action.listings.id] = action.listing;
      default:
        return state;
    }
}
export default listingReducer;