const GET_LISTING = "listing/GET_LISTING";
const ADD_LISTING = "listing/ADD_LISTING";
const UPDATE_LISTING = "listing/UPDATE_LISTING";
const DELETE_LISTING = "listing/DELETE_LISTING";

// actions
const getListings = (listings) => ({
    type: GET_LISTING,
    listings
});

const getOneListing = (userId) => ({
    type: GET_LISTING,
    userId
})
const updateListing = (listing) => ({
    type: UPDATE_LISTING,
    listing
})
const deleteListing = (listing) => ({
    type: DELETE_LISTING,
    listing
})

// Thunk actions

//GET All Listings
export const getAllListings = () => async (dispatch) => {
    const response = await fetch('/api/listings');
    if (!response.ok) throw response;
    const listings = await response.json();
    // console.log('FrontEnd********Testing Listings Get******', listings);
    dispatch(getListings(listings));
}

// GET User Listing
export const getUserListing = (userId) => async (dispatch) => {
    const response = await fetch(`/api/listings/user/${userId}/`);
    const listings = await response.json();
    dispatch(getOneListing(listings));
}

// POST Listing
export const addListing = (userId, name, description, imageURL, price) => async (dispatch) => {
    const response = await fetch(`/api/listings/user/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            description,
            imageURL,
            price

        })
      });
      const listing = await response.json();
      dispatch(addListing(listing));
      return;
}

// Edit listing
export const editListing = (id, name, description, imageURL, price) => async (dispatch) => {
      const response = await fetch(`/api/listings/${id}/edit`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name,
              description,
              imageURL,
              price
          })
      });
      const listing = await response.json();
      dispatch(updateListing(listing));
      return;
  }

  // Delete listing
  export const removeListing = (id) => async (dispatch) => {
      const response = await fetch(`/api/listings/${id}/delete`, {
          method: "DELETE",
      });
      const listing = await response.json();
      dispatch(deleteListing(listing));
      return;
  }


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

      case ADD_LISTING:
            newState = { ...state };
            newState[action.listings['id']] = action.listing;
            return newState;

      case UPDATE_LISTING:
            newState = { ...state };
            newState[action.listing['id']] = action.listing;
            return newState;
      case DELETE_LISTING:
            newState = { ...state };
            delete newState[action.listing.id];
            return newState;

      default:
        return state;
    }
}
export default listingReducer;