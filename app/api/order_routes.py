from flask import Blueprint, request
from flask_login import login_required
from flask_login import current_user
from app.forms import OrderForm
from app.models import Order, User, db, Listing, order_bag
from app.forms import OrderForm

order_routes = Blueprint('orders', __name__)


@order_routes.route('/', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/users/<id>/')
def userOrders(userId):
    userId = User.query.get(userId)
    orders = Order.query.filter_by(userId=userId)
    listingsInBag = order_bag.filter(listingId=listingId)
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/add/', methods=['POST'])
# @login_required
def add_order():
    data = request.json
    form = OrderForm()
    listing = Listing.query.get(id)
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_order = Order(
            bag_name=form.bag_name.data,
            userId=current_user.id,
            listingId=listing.id
        )

        db.session.add(new_order)
        db.session.commit()

        return new_order.to_dict()
    # return {'errors': validation_errors_list(form.errors)}


@order_routes.route('/<id>/delete', methods=['DELETE'])
def delete_order(id):
    order = Order.query.get(id)
    db.session.delete(order)
    db.session.commit()
    return order.to_dict()


@order_routes.route('/<id>/')
def orders(id):
    orderId = Order.query.get(id)
    orders = order_bag.query.filter_by(orderId=orderId)
    # userOrders = db.session.query(Order).filter(Order.userId == current_user.id)
    # bag = db.session.query(order_bag).filter(
    #     order_bag.listingId == id).filter(Order.userId == current_user.id)

    return {'orders': [order.to_dict() for order in orders]}
            # 'userOrders': [order.to_dict() for order in userOrders],
            # 'bag': [order.to_dict() for order in bag]}

    # listingIds = [listing.lisitng_Id for listing in orders]
    # orderBagIds = [listing.order_bagId for order in orders]
    # return {'songs': [{'playlistId': id, 'songId': song} for song in songIds]}


# @playlist_routes.route('/songs/add', methods=['POST'])
# def add_playlist_songs():
#     if request.method == "POST":
#         form = AddToPlaylistForm()

#         form['csrf_token'].data = request.cookies['csrf_token']
#         if form.validate_on_submit():
#             playlistIdForm = form.playlistId.data
#             songIdForm = form.songId.data
#             saved_song1 = SongPlaylist.insert().values(
#                 songId=songIdForm, playlistId=playlistIdForm)
#             db.session.execute(saved_song1)
#             db.session.commit()

#             return {
#                 'songId': songIdForm,
#                 'playlistId': playlistIdForm,
#             }
