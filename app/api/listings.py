from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Listing


listing_routes = Blueprint('listings', __name__)

@listing_routes('/')
# @login_required
def get_listings():
    listings = Listing.query.all()
    return {'listings': [listing.to_dict() for listing in listings]}

@listing_routes('/<int:id>')
# @login_required
def one_listing(id):
    listing = Listing.query.get(id)
    return listing.to_dict()
