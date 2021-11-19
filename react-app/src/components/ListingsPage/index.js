import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ListingsPage() {
    const [listings, setListings] = useState([]);
    const { userId } = useParams();
    
    useEffect(() => {
        (async () => {
        const response = await fetch(`/api/users/${userId}/listings`);
        const listings = await response.json();
        setListings(listings);
        })();
    }, [userId]);
    
    if (!listings) {
        return null;
    }
    
    return (
        <div>
        <h1>Listings</h1>
        <ul>
            {listings.map(listing => (
            <li key={listing.id}>
                <strong style={{ fontSize: "20" }}>
                Listing Id {listing.id}
                </strong>
            </li>
            ))}
        </ul>
        </div>
    );
}