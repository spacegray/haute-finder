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
    
    return {'order_bags': [order.to_dict() for order in order_bags]}


@order_bag_routes.route('/user/<userId>')
def userOrders(userId):

    user_order_bags = Order.query.filter_by(
        userId=userId).join(order_bag).all()

    return {'user_order_bags': [order.to_dict() for order in user_order_bags]}


@order_bag_routes.route('/<id>/delete', methods=['DELETE'])
def delete_order(id):
    order = Order.query.filter_by(userId=current_user.id).first()
 
    for item in order.listings:
  
        if (int(item.id) == int(id)):
            order.listings.remove(item)
            db.session.add(order)
            db.session.commit()
        return userOrders(current_user.id)
    return {'message': 'Order not found'}


@order_bag_routes.route('/<id>/delete/all', methods = ['DELETE'])
def delete_all_orders(id):
  
    order = Order.query.filter_by(userId=current_user.id).first()
   
    
    for item in order.listings:
        
        order.listings.remove(item)
        # db.session.remove(order)
        db.session.commit()

    return {'message': 'Order Deleted'}


@order_bag_routes.route('/<listingId>/add', methods=['POST'])
def add_order(listingId):
    order = Order.query.filter_by(userId=current_user.id).first()
    #
    order.listings.append(Listing.query.get(listingId))
    db.session.add(order)
    db.session.commit()
    return userOrders(current_user.id)
    
