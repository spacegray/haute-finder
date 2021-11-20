const GET_LISTING = "listing/GET_LISTING";
const ADD_LISTING = "listing/ADD_LISTING";
const UPDATE_LISTING = "listing/UPDATE_LISTING";
const REMOVE_LISTING = "listing/REMOVE_LISTING";

// actions
const getListings = (listings) => ({
    type: GET_LISTING,
    listings
});

const getOneListing = (userId) => ({
    type: GET_LISTING,
    userId
})

// Thunk actions

//GET All Listings
export const getAllListings = () => async (dispatch) => {
    const response = await fetch('/api/listings');
    const listings = await response.json();
    dispatch(getListings(listings));
}

// GET User Listing
export const getUserListing = (userId) => async (dispatch) => {
    const response = await fetch(`/api/listings/user/${userId}/`);
    const listings = await response.json();
    dispatch(getOneListing(listings));
}

const listingReducer = (state = {}, action) => {
    let newState = state;
    switch (action.type) {
        case GET_LISTING:
            newState = {...state}
            action.listings[listing.id].forEach(listing => {
                newState[listing.id] = listing;
            });
            return newState;
        case ADD_LISTING:
            newState = {...state}
            newState[action.listing.id] = action.listing;
    }
}