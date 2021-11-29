from flask import Blueprint, request
from flask_login import login_required
from flask_login import current_user
from app.forms import OrderForm
from app.models import Order, User, db, Listing, order_bag
from app.forms import OrderForm

order_bag_routes = Blueprint('order_bag', __name__)


@order_bag_routes.route('/', methods=['GET'])
def get_orders():
    order_bags = Order.query.join(order_bag).all()
    print('GET TEST!', order_bags)
    return {'order_bags': [order.to_dict() for order in order_bags]}


@order_bag_routes.route('/user/<userId>')
def userOrders(userId):

    user_order_bags = Order.query.filter_by(
        userId=userId).join(order_bag).all()
    # userOrders =
    return {'user_order_bags': [order.to_dict() for order in user_order_bags]}


@order_bag_routes.route('/<id>/delete', methods=['DELETE'])
def delete_order(id):
    # userId = current_user.id

    # bag = Order.query.filter_by(
    #     userId=userId).join(order_bag).filter_by(listing_id=id).first()
    # print('ORDER QUERY JOINS FILTER ON USERID & LISTINGID', bag)
    # data = request.json
    bag = Order.query.get(id)
    # listingId = Listing.query.get(id)
    item = Listing.query.get(id)

    # bag = db.session.query(order_bag).filter(
    #     order_bag.c.listing_id == id).first()
    # print('ORDER_BAG QUERY FILTER BY LISTINGID', bag)

    # item = order_bag.query.filter(order_bag.listing_id == id).first()
    # db.session.delete(bag)
    bag.item.remove(item)
    db.session.commit()
    return item.to_dict()


# @order_bag_routes.route('/<id>/delete', methods=['DELETE'])
# def delete_order(id):
#     # userId = current_user.id

#     # user_order_bags = Order.query.filter_by(
#     #     userId=userId).join(order_bag).all()
#     print('MUSTACHE', id)
#     bag = db.session.query(order_bag).filter(
#         order_bag.listing_id == id).first()
#     # order_bag.query.filter(order_bag.listing_id == id).delete()
#     bag.delete()
#     db.session.commit()
#     return True

@order_bag_routes.route('/<orderId>/<listingId>/add', methods=['POST'])
def add_order(orderId, listingId):
    # if request.method == 'POST':
    #     addedItem = order_bag.insert().values(order_id=orderId, listing_id=listingId)
    #     db.session.execute(addedItem)
    #     db.session.commit()
    #     return {'order_id': orderId, 'listing_id': listingId}
    
    order = Order.query.get(orderId)
    listing = Listing.query.get(listingId)
    order.item.append(listing)
    db.session.add(order)
    db.session.commit()
    return listing.to_dict()
