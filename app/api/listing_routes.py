from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Listing, db
from app.forms import ListingForm

listing_routes = Blueprint('listings', __name__)


@listing_routes.route('/')
# @login_required
def get_listings():
    listings = Listing.query.all()
    return {'listings': [listing.to_dict() for listing in listings]}


@listing_routes.route('/<int:id>', methods=['GET'])
# @login_required
def one_listing(id):
    listing = Listing.query.get(id)
    return listing.to_dict()


@listing_routes.route('/user/<userId>/')
def user_listings(userId):
    listings = Listing.query.filter_by(userId=userId)
    return {'listings': [listing.to_dict() for listing in listings]}


@listing_routes.route('/add', methods=['POST'])
# @login_required
def add_listing():

    if request.method == 'POST':
        form = ListingForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = Listing()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
        return data.to_dict()


# @listing_routes.route('/<int:id>/edit', methods=['POST'])
# def edit_listing(id):

#     form = ListingForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         data = form.data
#         listing = Listing.query.get(id)
#         listing.name = data['title']
#         listing.description = data['description']
#         listing.imageURL = data['imageURL']
#         listing.price = data['price']
#         db.session.commit()
#         return listing.to_dict()

@listing_routes.route('/<id>/edit', methods=['PUT'])
def edit_listing(id):
    form = ListingForm()
    listing = Listing.query.get(id)

    if len(form.data['description']) > 0:
        listing.description = form.data['description']
    
    if len(form.data['imageURL']) > 0:
        listing.imageURL = form.data['imageURL']
    
    if len(form.data['price']) > 0:
        listing.price = form.data['price']
        
    db.session.commit()
    return listing.to_dict()


@listing_routes.route('/<id>/delete', methods=['DELETE'])
def delete_listing(id):
    listing = Listing.query.get(id)
    db.session.delete(listing)
    db.session.commit()
    return listing.to_dict()
