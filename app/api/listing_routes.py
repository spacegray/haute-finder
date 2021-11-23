from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Listing, db
from app.forms import ListingForm
from flask_login import current_user

listing_routes = Blueprint('listings', __name__)


def validation_errors_list(validation_errors):
    """
    Turns WTForms validation errors into a list
    """
    errorMessages = []
    for inputField in validation_errors:
        for error in validation_errors[inputField]:
            errorMessages.append(f'{inputField} : {error}')
    return errorMessages

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


@listing_routes.route('/users/<userId>/')
def user_listings(userId):
    listings = Listing.query.filter_by(userId=userId)
    return {'listings': [listing.to_dict() for listing in listings]}


@listing_routes.route('/add', methods=['POST'])
# @login_required
def add_listing():
    data = request.json
    form = ListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_listing = Listing(
            userId = current_user.id,
            name = form.data['name'],
            description = form.data['description'],
            imageURL = form.data['imageURL'],
            price = form.data['price']
        )

        db.session.add(new_listing)
        db.session.commit()
 
        return new_listing.to_dict()
    return {'errors': validation_errors_list(form.errors)}



@listing_routes.route('/<id>/', methods=['PUT'])
def edit_listing(id):
    form = ListingForm()
    listing = Listing.query.get(id)
    

    if (form.data['name']) == None:
        listing.name = listing.name

    elif len(form.data['name']):
        listing.name = form.data['name']
    
    if (form.data['description']) == None:
        listing.description = listing.description

    elif len(form.data['description']):
        listing.description = form.data['description']
    

    if (form.data['imageURL']) == None:
        listing.imageURL = listing.imageURL

    elif len(form.data['imageURL']):
        listing.imageURL = form.data['imageURL']
    
 
    if (form.data['price']) == None:
        listing.price = listing.price

    elif len(form.data['price']):
        listing.price = form.data['price']

    db.session.commit()
    return listing.to_dict()
    # return {'errors': validation_errors_list(form.errors)}

@listing_routes.route('/<id>/delete', methods=['DELETE'])
def delete_listing(id):
    listing = Listing.query.get(id)
    db.session.delete(listing)
    db.session.commit()
    return listing.to_dict()
