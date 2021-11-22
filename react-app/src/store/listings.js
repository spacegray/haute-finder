const GET_LISTING = "listing/GET_LISTING";
const GET_ONE = "listing/GET_ONE";
const ADD_LISTING = "listing/ADD_LISTING";
// const UPDATE_LISTING = "listing/UPDATE_LISTING";
const DELETE_LISTING = "listing/DELETE_LISTING";

// actions
const getAllListings = (listings) => ({
    type: GET_LISTING,
    listings
});

// const getSingleListing = (listing) => ({
//     type: GET_LISTING,
//     listing
// })

const getUserListings = (userId) => ({
    type: GET_LISTING,
    userId
})
const addListing = (listing) => ({
    type: ADD_LISTING,
    listing
})
const deleteListing = (listing) => ({
    type: DELETE_LISTING,
    listing
})

// Thunk actions

//GET All Listings
export const getListings = () => async (dispatch) => {
    const response = await fetch('/api/listings');
    if (!response.ok) throw response;
    const listings = await response.json();
    // console.log('FrontEnd********Testing Listings Get******', listings);
    dispatch(getAllListings(listings));
}

//GET SINGLE LISTING
export const getOneListing = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/listings/${listingId}`);
    if (!response.ok) throw response;
    const listing = [await response.json()];
    dispatch(getAllListings(listing));


}
// GET User Listing
export const getUserListing = (userId) => async (dispatch) => {
    const response = await fetch(`/api/listings/users/${userId}/`);
      const listings = await response.json();
      dispatch(getUserListings(listings));
}

// POST Listing
export const createListing = (userId, name, description, imageURL, price) => async (dispatch) => {
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
      dispatch(addListing(listing));
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

// const newState = {};
// for (let article of action.list) {
//   newState[article.id] = article;
// }
// return newState;

 const listingReducer = (state={}, action) => {
    let newState;
    switch (action.type){
        case GET_LISTING:
            newState = {...state}
            action.listings['listings'].forEach(listing => {
                newState[listing.id] = listing
            });
            return newState;
        // case GET_ONE:
        //     newState = {...state}
        //     newState[action.listing['id']]
        //     return newState;  
        case ADD_LISTING:
            newState = {...state}
            newState[action.listing.id] = action.listing
            return newState;
        
        // case UPDATE_LISTING:
        //     newState = {...state}
        //     newState[action.listing.id] = action.listing
        //     return newState;

        case DELETE_LISTING:
            newState = {...state};
            delete newState[action.listing.id];
            return newState;

        default:
            return state;
    }
}


export default listingReducer;